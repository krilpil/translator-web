import baseApi from '../baseApi';

type IMakeTransation = {
    srcLanguageId: number,
    dstLanguageId: number,
    text: string;
};

export const defaultApi = async () => {
    const response = await baseApi.get('/api/languages');
    return response.data;
};

export const makeTransation = async (params: IMakeTransation) => {
    const response = await baseApi.post('/api/translate', params);

    return response.data;
};
