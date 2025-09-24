import styled from 'styled-components';
import { Button } from 'antd';
import { JSX } from 'react';

export const SNotFoundPage = styled.div`
    display: grid;
    grid-template-columns: minmax(200px, 320px) 1fr;
    grid-gap: 92px;
`;

export const SContent = styled.div`
    display: flex;
    align-self: end;
    flex-direction: column;
    gap: 16px;
`;

export const STitle = styled.h1`
    font-size: 28px;
    line-height: 1.1;
    font-weight: bold;
`;

export const SDescription = styled.p`
    font-size: 18px;
    line-height: 1.1;
`;

export const SImageNotFound = styled.img.attrs({
    src: '/images/404.png',
    alt: '404'
})`
    //height: 400px;
    //aspect-ratio: 4/4;
    margin-bottom: 56px;
`;

const iconNextButton: JSX.Element = <img src={'/images/arrow-left-black.svg'} alt="" />;

export const SNextButton = styled(Button).attrs({
    icon: iconNextButton,
})`
    &.ant-btn {
        height: auto;
        padding: 12px;
        font-size: 18px;
        border-radius: 28px;
        gap: 16px;
        
        &:not(.ant-btn-disabled):hover {
            color: black;
        }
    }
`;