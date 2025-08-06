import { setCookie } from '../../utils/setCookie';
import { getCookie } from '../../utils/getCookie';
import baseApi from '../baseApi';

export const auth = async (params: { initData: string }) => {
    const token = getCookie('token');

    if (!token) {
        const response = await baseApi.post('/auth', params);

        const token = response.data.token;
        if (token) {
            setCookie('token', token, 4);
        }
        return response.data;
    }
    return;
};
