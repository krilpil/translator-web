import baseApi from '../baseApi';

type IMakeTransation = {
    languageId: number;
    text: string;
};

export const defaultApi = async () => {
    const response = await baseApi.get('/languages');
    return response.data;
};

export const makeTransation = async (params: IMakeTransation) => {
    const response = await baseApi.post('/translate', params);

    return response.data;
};
