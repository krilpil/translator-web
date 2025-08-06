import baseApi from '../baseApi';

type ISaveTransation = {
    languageId: number;
    srcText: string;
    translationText: string;
};

export const getTranslation = async () => {
    const response = await baseApi.get('/translations/user', { params: { limit: 100 } });

    return response.data;
};

export const saveTransation = async (params: ISaveTransation) => {
    const response = await baseApi.post('/translations', params);

    return response.data;
};

export const deleteTransation = async (id: number) => {
    const response = await baseApi.delete(`/translations/${id}`);

    return response.data;
};
