export interface TranslationInputTextareaProps {
    language: string;
    value: string;
    onChange: (value: string) => void;
    onClear: () => void;
}

export interface TranslationOutputTextareaProps {
    language: string;
    value: string;
    loading: boolean;
    onCopy: () => void;
    onLike: () => void;
    onSound: () => void;
}

export interface STextareaProps {
    largeText: boolean;
}