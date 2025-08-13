export interface IOnboardStore {
    isPassed: boolean;
}

export interface IUseOnboardStore {
    store: IOnboardStore;
    setPassed: () => void;
}