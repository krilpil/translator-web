import { DefaultTheme } from 'styled-components';
import { breakpoints } from '@/shared/config';

export const styleComponentsConfig: DefaultTheme = {
    breakpoints: {
        maxMobile: breakpoints.maxMobile,
        maxTablets: breakpoints.maxTablets,
        maxLaptops: breakpoints.maxLaptops,
        maxOldDesktops: breakpoints.maxOldDesktops,
        maxDesktops: breakpoints.maxDesktops
    }
};
