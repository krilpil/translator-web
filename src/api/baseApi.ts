import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from '../utils/getCookie';
import { auth } from './auth/auth.api';

const baseApi: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 20000,
    headers: { 'Content-Type': 'application/json' },
});

let isRefreshing = false;
let failedRequests: any[] = [];

const handlerRequest = async (config: InternalAxiosRequestConfig) => {
    const token = getCookie('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

const handlerResponse = async (response: AxiosResponse): Promise<AxiosResponse> => {
    return response;
}

const handlerRequestError = async (error: AxiosError | Error): Promise<AxiosError> => {
    return Promise.reject(error);
}

const handlerResponseError = async (error: AxiosError | Error): Promise<AxiosError> => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
            return new Promise((resolve, reject) => {
                failedRequests.push({ resolve, reject });
            })
                .then(() => {
                    return baseApi(originalRequest);
                })
                .catch((err) => {
                    return Promise.reject(err);
                });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
            await auth({ initData: '' });

            const token = getCookie('token');
            if (token) {
                originalRequest.headers.Authorization = `Bearer ${token}`;
            }

            failedRequests.forEach((prom) => prom.resolve());
            failedRequests = [];

            return baseApi(originalRequest);
        } catch (refreshError) {
            failedRequests.forEach((prom) => prom.reject(refreshError));
            failedRequests = [];

            return Promise.reject(refreshError);
        } finally {
            isRefreshing = false;
        }
    }

    return Promise.reject(error);
}

baseApi.interceptors.request.use(handlerRequest, handlerRequestError);
baseApi.interceptors.response.use(handlerResponse, handlerResponseError);

export default baseApi;
