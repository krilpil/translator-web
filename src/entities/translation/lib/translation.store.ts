import { create } from 'zustand';

import { ITranslationStore, IUseTranslationStore } from '../model/translationStore.types';

const initialState: ITranslationStore = {
    srcLanguage: 'Русский',
    srcLanguageId: 1,
    srcValue: '',

    dstLanguage: 'Английский',
    dstLanguageId: 2,
    dstValue: ''
};

export const useTranslationStore = create<IUseTranslationStore>()(
    (set) => ({
        store: initialState,
        setStore: (value) => set((state) => ({ ...state, store: { ...state.store, ...value } }))
    })
);
