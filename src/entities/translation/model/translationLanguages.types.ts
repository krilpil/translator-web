export interface TranslationLanguagesProps {
    srcLanguage: string;
    dstLanguage: string;
    onSwap: () => void;
    onChangeSrcLanguage: () => void;
    onChangeDstLanguage: () => void;
}