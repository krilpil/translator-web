export interface IGetLanguagesRes {
    description: string;
    id: number;
    isByUser: boolean;
    languageCode: string;
    name: string;
}

export type APIGetLanguages = IGetLanguagesRes