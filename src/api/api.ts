import baseApi from './baseApi';

const api = {
    async getData<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
        try {
            const response = await baseApi.get<T>(endpoint, { params });
            return response?.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },
    async postData<T, R>(endpoint: string, data: T): Promise<R> {
        try {
            const response = await baseApi.post<R>(endpoint, data);
            return response?.data; // Вернуть только данные ответа
        } catch (error) {
            console.error('Error posting data:', error);
            throw error; // Пробрасываем ошибку для обработки в компоненте
        }
    },
    async patchData<T, R>(endpoint: string, data: T): Promise<R> {
        try {
            const response = await baseApi.patch<R>(endpoint, data);
            return response?.data;
        } catch (error) {
            console.error('Error patching data:', error);
            throw error;
        }
    },
    async deleteData<T, R>(endpoint: string, data?: T): Promise<R> {
        try {
            const response = await baseApi.delete<R>(endpoint, {
                data,
            });
            return response?.data;
        } catch (error) {
            console.error('Error deleting data:', error);
            throw error;
        }
    },
};

export default api;
