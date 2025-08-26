import React, { FC, PropsWithChildren } from 'react';
import { WithStyledComponents } from './WithStyledComponents';
import { WithQueryClient } from './WithRQClientProvider';

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
    return (
        <WithQueryClient>
            <WithStyledComponents>
                {children}
            </WithStyledComponents>
        </WithQueryClient>
    );
};