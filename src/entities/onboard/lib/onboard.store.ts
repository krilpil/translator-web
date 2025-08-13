import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IOnboardStore, IUseOnboardStore } from '../model/onboardStore.model';

const initialState: IOnboardStore = {
    isPassed: false
};

export const useOnboardStore = create<IUseOnboardStore>()(
    persist(
        (set) => ({
            store: initialState,
            setPassed: () => set(() => ({ store: { isPassed: true } }))
        }),
        { name: 'onboard' }
    )
);
