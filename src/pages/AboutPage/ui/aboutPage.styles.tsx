import styled from 'styled-components';
import { Button } from 'antd';
import React, { JSX } from 'react';
import { IconClose } from '@/shared/assets';

export const SAboutPage = styled.div`
    display: flex;
    justify-content: center;
    width: 100dvw;
    min-height: 100dvh;
    padding: 24px;
    background-color: #1A2FD5;
`;

export const SMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px;
    width: 100%;
    height: 100%;
`;

export const SHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-content: space-between;
    align-items: center;
    justify-items: center;

    & > * {
        &:first-child {
            justify-self: start;
        }

        &:last-child {
            justify-self: end;
        }
    }


`;

export const SLogotype = styled.img.attrs({
    src: '/images/SLANGLATE.svg',
    alt: 'slanglate'
})`
    width: 55px;
    height: 25px;

    @media (min-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        width: 75px;
        height: 34px;
    }
`;

export const STitle = styled.span`
    font-size: 26px;
    font-weight: 700;
`;

const iconClose: JSX.Element = <IconClose stroke={'white'} />;

export const SCloseButton = styled(Button).attrs({
    type: 'text',
    icon: iconClose
})`
    &.ant-btn {
        font-size: 14px;

        @media (min-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
            font-size: 18px;
        }
    }
`;

export const SAbout = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        flex-direction: column;
        align-items: start;
    }
`;

export const SAboutTitle = styled.h1`
    font-size: 58px;
    line-height: normal;
    color: white;

    & b {
        font-size: 71px;
    }
`;

export const SAboutInfo = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        align-items: start;
    }
`;

export const STags = styled.div`
    display: flex;
    gap: 8px;
    height: max-content;

    & > span {
        font-size: 18px;
        font-weight: 300;
        padding: 6px 16px;

        border: 1px solid transparent;
        border-radius: 16px;
        background: linear-gradient(#3349ee, #3349ee) padding-box,
        linear-gradient(135deg, #6372e8, #3349ee, #3349ee, #3349ee, #3349ee, #6372e8, #3349ee, #6372e8) border-box;

        @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
            font-size: 16px;
        }
    }
`;

export const SUsers = styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
        flex-direction: row-reverse;
    }
`;

export const SUsersCount = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    font-weight: 300;
    padding: 8px 0;

    & strong {
        line-height: 0.8;
        font-size: 28px;
        font-weight: bold;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        font-size: 18px;
        align-items: start;

        & strong {
            font-size: 32px;
        }
    }
`;

export const SAvatars = styled.img.attrs({
    src: '/images/avatars.png',
    alt: 'avatars'
})`
    height: 58px;
`;

export const SDescription = styled.div`
    font-size: 50px;
    line-height: normal;
    padding: 24px 48px;
    border: 1px solid transparent;
    border-radius: 30px;
    background: linear-gradient(#3349ee, #3349ee) padding-box,
    linear-gradient(135deg, #6372e8, #3349ee, #6372e8, #3349ee, #6372e8) border-box;

    & strong {
        color: black;
        font-weight: normal;
    }
`;