import styled from 'styled-components';
import { Button, Input } from 'antd';

export const STranslationOutputTextarea = styled.div`
`

export const STranslationInput = styled.div`
    padding: 24px 8px;
`;

export const SToolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SToolbarGroup = styled.div`
    display: flex;
    gap: 8px;
`;

export const SToolbarButton = styled(Button).attrs({
    type: 'text'
})`
    &.ant-btn {
        width: auto;
        height: auto;
    }
`;

export const SLanguage = styled.span`
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 16px;
    color: #fffffff;
`;

export const STranslationOutput = styled.div`
    padding: 24px;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: saturate(500%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1),
    inset 0 4px 20px rgba(0, 0, 0, 0.5);

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 36px;
        backdrop-filter: blur(1px);
        box-shadow: inset -10px -8px 0 -11px rgba(255, 255, 255, 0.7),
        inset 0 -9px 0 -8px rgba(255, 255, 255, 0.7);
        opacity: 0.4;
        z-index: -1;
        filter: blur(1px) drop-shadow(10px 4px 6px black) brightness(50%);
    }
`;

export const STextarea = styled(Input.TextArea).attrs({
    variant: 'borderless'
})`
    color: #ffffff;
    font-size: 24px;
    padding: 16px 11px 0 0;

    &.ant-input-disabled {
        cursor: default;
        color: inherit;
    }

    &::placeholder {
        color: #787878;
    }
`;

export const SGlowTextarea = styled.h1`
    position: absolute;
    margin: 68px 11px 78px -16px;
    padding: 0 40px;
    color: #517FF4;
    font-size: 24px;
    line-height: 1.57;
    filter: blur(35px);
    background-color: #517FF4;
    max-height: 275px;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        max-height: 200px;
        margin: 68px 0;
        padding: 0 8px 0 64px;
    }
`;