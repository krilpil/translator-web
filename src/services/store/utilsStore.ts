import { create } from 'zustand';

type Translation = {
    id: number;
    name: string;
    description: string;
    languageCode: string;
    isByUser: boolean;
};

type AppState = {
    selectedLanguage: number | null;
    setSelectedLanguage: (value: number) => void;

    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;

    leftLanguage: string;
    rightLanguage: Translation;
    setRightLanguage: (lang: Translation) => void;

    view: 'history' | 'likes';
    setView: (value: 'history' | 'likes') => void;
};

export const useUtilsStore = create<AppState>((set) => ({
    leftLanguage: 'Русский',
    rightLanguage: {
        id: 1,
        name: 'skuf',
        description: 'skuf slang',
        languageCode: 'ru',
        isByUser: false,
    },
    selectedLanguage: 1,

    sidebarOpen: false,
    setSidebarOpen: (value) => set({ sidebarOpen: value }),

    setSelectedLanguage: (value) => set({ selectedLanguage: value }),

    setRightLanguage: (lang) => set({ rightLanguage: lang }),

    view: 'history',
    setView: (value) => set({ view: value }),
}));
