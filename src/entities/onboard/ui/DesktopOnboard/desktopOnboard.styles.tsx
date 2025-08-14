import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { JSX } from 'react';

export const SDesktopOnboardAbout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
`;

export const SViewBox = styled.div`
    display: grid;
    grid-gap: 150px;
    padding: 32px;
    margin-bottom: 120px;
    align-items: end;
    grid-template-columns: repeat(2, 1fr);
    max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px;
    max-height: 600px;
    width: 100%;
    height: 100%;
`;

export const SInformation = styled.div`
    display: grid;
    grid-gap: 20px;
`;

const cssImage = css`
    height: 100%;
    width: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
`;

export const SImageOnboardAbout = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url('/images/onboard/onboard-1.png');
    ${cssImage};
`;

export const SImageOnboardCreate = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url('/images/onboard/onboard-2.png');
    ${cssImage};
`;

export const SImageOnboardForward = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url('/images/onboard/onboard-3.png');
    ${cssImage};
`;

const iconCommunityButton: JSX.Element = <img src="/images/slanglate-telegram.png" width={34} height={34} alt="" />;

export const SCommunityButton = styled(Button).attrs({
    icon: iconCommunityButton,
    href: 'https://t.me/slanglate',
    target: '_blank'
})`
    &.ant-btn {
        height: max-content;
        width: max-content;
        padding: 6px 16px 6px 6px;
        //margin-bottom: 40px;
        border-radius: 20px;
        border: none;
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
        background: rgba(255, 255, 255, 0.35);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);

        & .ant-btn-icon > img {
            border-radius: 33px;
        }
    }
`;

export const STitle = styled.p`
    line-height: 1.1;
    font-size: 42px;
    font-weight: 700;
`;

export const SDescription = styled.p`
    line-height: 1.1;
    font-size: 24px;
`;

const iconNextButton: JSX.Element = <img src={'/images/arrow-right-black.svg'} alt="" />;

export const SNextButton = styled(Button).attrs({
    icon: iconNextButton,
    block: true
})`
    &.ant-btn {
        margin-top: 32px;
        border-radius: 28px;
        height: 45px;
    }
`;