import baseApi from '../../../../api/baseApi.ts';
import { APIGetLanguages, IGetLanguagesRes } from './getLanguages.types.ts';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const getLanguagesKey = 'getLanguages';

const getLanguages = (): Promise<IGetLanguagesRes> => {
    return baseApi<APIGetLanguages, AxiosResponse<APIGetLanguages>>({
        url: '/api/languages',
        method: 'GET'
    }).then(({ data }) => {
        return data;
    });
};

export const useGetLanguages = () => useQuery({
    queryKey: [getLanguagesKey],
    queryFn: getLanguages
});