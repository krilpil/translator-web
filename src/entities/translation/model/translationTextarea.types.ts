export interface TranslationInputTextareaProps {
    language: string;
    value: string;
    onChangeSrcLanguage: () => void;
    onChange: (value: string) => void;
    onClear: () => void;
}

export interface TranslationOutputTextareaProps {
    language: string;
    value: string;
    loading: boolean;
    onChangeDstLanguage: () => void;
    onSwap: () => void;
    onCopy: () => void;
    onLike: () => void;
    onSound: () => void;
}

export interface STextareaProps {
    largeText: boolean;
}