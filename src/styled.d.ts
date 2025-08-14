import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: {
            maxMobile: number;
            maxTablets: number;
            maxLaptops: number;
            maxOldDesktops: number;
            maxDesktops: number;
        };
    }
}
