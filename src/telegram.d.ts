export {};

declare global {
    interface Window {
        Telegram?: {
            WebApp?: {
                initData: string;
                initDataUnsafe: any;
                expand: () => void;
                close: () => void;
                sendData: (data: string) => void;
                version: string;
                platform: string;
                themeParams: {
                    bg_color?: string;
                    text_color?: string;
                    hint_color?: string;
                    link_color?: string;
                    button_color?: string;
                    button_text_color?: string;
                };
                isExpanded: boolean;
                isClosingConfirmationEnabled: boolean;
                enableClosingConfirmation: () => void;
                disableClosingConfirmation: () => void;
            };
        };
    }
}
