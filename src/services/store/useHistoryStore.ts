import { create } from 'zustand';

type TranslationEntry = {
    leftLanguage: string;
    rightLanguage: any;
    leftTranslate: string;
    rightTranslate: string;
    isLiked: boolean;
};

type AppState = {
    wordToTranslate: string;
    translated: string;
    history: TranslationEntry[];
    setWordToTranslate: (word: string) => void;
    setTranslated: (word: string) => void;
    addToHistory: (entry: TranslationEntry) => void;
    clearHistory: () => void;
    loadHistoryFromStorage: () => void;
};

export const useHistoryStore = create<AppState>((set, get) => ({
    wordToTranslate: '',
    translated: '',
    history: [],

    setWordToTranslate: (word) => set({ wordToTranslate: word }),
    setTranslated: (word) => set({ translated: word }),

    addToHistory: (newEntry: TranslationEntry) => {
        const history = [newEntry, ...get().history];
        localStorage.setItem('history', JSON.stringify(history));
        set({ history });
    },

    clearHistory: () => {
        localStorage.removeItem('history');
        set({ history: [] });
    },

    loadHistoryFromStorage: () => {
        const raw = localStorage.getItem('history');
        if (raw) {
            try {
                const parsed: TranslationEntry[] = JSON.parse(raw);
                set({ history: parsed });
            } catch (e) {
                console.error('Ошибка при загрузке истории:', e);
            }
        }
    },
}));
