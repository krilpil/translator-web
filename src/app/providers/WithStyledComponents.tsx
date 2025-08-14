import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { styleComponentsConfig } from '../styles/styledComponentsConfig';
import '@ant-design/v5-patch-for-react-19';

export const WithStyledComponents: FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider theme={styleComponentsConfig}>{children}</ThemeProvider>;
};
