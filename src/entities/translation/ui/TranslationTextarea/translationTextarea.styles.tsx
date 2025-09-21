import styled, { css } from 'styled-components';
import { Button, Input } from 'antd';
import { STextareaProps } from '@/entities/translation';

export const STranslationOutputTextarea = styled.div`
`;

export const STranslationInput = styled.div`
    padding: 24px 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        padding: 0 24px;
    }
`;

export const SToolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
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
    color: #ffffff;
    cursor: pointer;
`;

export const STranslationOutput = styled.div`
    padding: 24px;
    background: radial-gradient(95% 300% at 50% 50%, rgba(0, 0, 0, 0.6) 30%, rgba(255, 255, 255, 0.05) 70%);
    backdrop-filter: saturate(300%);
    outline: 2px solid rgba(255, 255, 255, 0.1);
    outline-offset: 1px;
    border-radius: 40px;
    box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1),
    inset 0 4px 20px rgba(255, 255, 255, 0.1);
    
    -webkit-backdrop-filter: saturate(300%);  
    -webkit-border-radius: 40px; 
    -webkit-box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1),
    inset 0 4px 20px rgba(255, 255, 255, 0.1); 

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
        
        -webkit-backdrop-filter: blur(1px);
        -webkit-box-shadow: inset -10px -8px 0 -11px rgba(255, 255, 255, 0.7),
        inset 0 -9px 0 -8px rgba(255, 255, 255, 0.7);
    }
`;

export const STextarea = styled(Input.TextArea).attrs({
    variant: 'borderless'
})<STextareaProps>`
    &.ant-input {
        color: #ffffff;
        font-size: 24px;
        padding: 0 11px 0 0;
        height: 260px !important;
        max-height: 260px !important;
        min-height: 260px !important;

        ${({ largeText }) => largeText && css`
            font-size: 36px;
        `};

        &.ant-input-disabled {
            cursor: default;
            color: inherit;
        }

        &::placeholder {
            color: #787878;
        }
    }
`;

export const SGlowTextarea = styled.span<STextareaProps>`
    position: absolute;
    margin: 52px 11px 78px -16px;
    padding: 16px 40px;
    color: #517FF4;
    font-size: 24px;
    line-height: 1.57;
    filter: blur(40px);
    background-color: #517FF4;
    max-height: 235px;
    overflow: hidden;

    /* WebKit-specific styles */
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -webkit-transform: translate3d(0, 0, 0); /* For hardware acceleration */
    -webkit-backface-visibility: hidden; /* To prevent flickering effects */

    ${({ largeText }) => largeText && css`
        font-size: 36px;
    `};

    @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        max-height: 200px;
        margin: 68px 0;
        padding: 0 8px 0 64px;
    }

`;