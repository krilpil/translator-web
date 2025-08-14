import React, { FC, PropsWithChildren } from 'react';
import { WithStyledComponents } from '@/app/providers/WithStyledComponents';

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
    return (
        <WithStyledComponents>
            {children}
        </WithStyledComponents>
    );
};