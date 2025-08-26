export interface ITranslationStore {
    srcLanguage: string;
    srcLanguageId: number;
    srcValue: string;

    dstLanguage: string;
    dstLanguageId: number;
    dstValue: string;
}

export interface IUseTranslationStore {
    store: ITranslationStore;
    setStore: (value: Partial<ITranslationStore>) => void;
}