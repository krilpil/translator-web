import baseApi from '@/api/baseApi';
import { APIGetTranslate, IGetTranslate, IGetTranslateRes } from './getTranslate.types';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const getTranslateKey = 'getTranslate';

const getTranslate = (data: IGetTranslate): Promise<IGetTranslateRes> => {
    return baseApi<APIGetTranslate, AxiosResponse<APIGetTranslate>>({
        url: '/api/translate',
        method: 'POST',
        data: data
    }).then(({ data }) => {
        return data;
    });
};

export const useGetTranslate = () => useMutation({
    mutationKey: [getTranslateKey],
    mutationFn: (data: IGetTranslate) => getTranslate(data)
});