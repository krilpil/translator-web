import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { JSX } from 'react';

const cssMobileOnboard = css`
    display: flex;
    height: 100%;
    flex: 1;
    flex-direction: column;
    justify-content: end;
    padding: 16px 16px 120px 16px;
    font-family: Helvetica, sans-serif;
    color: #ffffff;
    background-repeat: no-repeat;
`;

export const SMobileOnboardAbout = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 65%), url('/images/onboard/onboard-1.png');
    background-position: 65% 0;
    background-size: 80%;

    ${cssMobileOnboard};
`;

export const SMobileOnboardCreate = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 65%), url('/images/onboard/onboard-2.png');
    background-position: 25% 0;
    background-size: 80%;

    ${cssMobileOnboard};
`;

export const SMobileOnboardForward = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 65%), url('/images/onboard/onboard-3.png');
    background-position: 50% -2rem;
    background-size: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.maxMobile}px) {
        background-size: 80%;
    }

    ${cssMobileOnboard};
`;


export const SInformation = styled.div`
    display: grid;
    grid-gap: 16px;
    justify-items: center;
`;

const iconCommunityButton: JSX.Element = <img src="/images/slanglate-telegram.png" width={34} height={34} alt="" />;

export const SCommunityButton = styled(Button).attrs({
    icon: iconCommunityButton,
    href: 'https://t.me/slanglate',
    target: '_blank'
})`
    &.ant-btn {
        height: auto;
        width: max-content;
        padding: 4px 16px 4px 4px;
        margin-bottom: 40px;
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
    padding: 0 24px;
    text-align: center;
    line-height: 1.1;
    font-size: 30px;
    font-weight: 700;
`;

export const SDescription = styled.p`
    padding: 0 24px;
    text-align: center;
    line-height: 1.1;
    font-size: 18px;
`;