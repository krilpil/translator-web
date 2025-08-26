export interface IGetTranslate {
    srcLanguageId: number,
    dstLanguageId: number,
    text: string;
}

export interface IGetTranslateRes {
    translatedText: string;
    wikipediaArticle: string;
}

export type APIGetTranslate = IGetTranslateRes