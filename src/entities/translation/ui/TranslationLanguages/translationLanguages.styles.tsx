import styled from 'styled-components';
import { Button } from 'antd';
import { JSX } from 'react';
import { IconSwap } from '@/shared/assets';

export const STranslationLanguages = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
    gap: 16px;
`;

const iconSwap: JSX.Element = <IconSwap />;

export const SSwapButton = styled(Button).attrs({
    type: 'text',
    icon: iconSwap
})``;

export const SLanguageButton = styled(Button)`
    &.ant-btn {
        font-size: 20px;
        color: #FFFFFF;
        background-color: #0B0B0B;
        border: none;
        padding: 12px 44px;
        height: auto;

        &.ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover {
            color: #FFFFFF;
            background-color: #3a3a3a;
        }
    }
`;