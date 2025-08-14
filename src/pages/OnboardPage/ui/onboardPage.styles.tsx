import styled from 'styled-components';
import { Button, Carousel } from 'antd';
import { JSX } from 'react';

export const SOnboardPage = styled.div`
    height: 100dvh;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    background-repeat: repeat;
    background-size: contain;
    background-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 90%), url('/images/grid.png');

    & .ant-carousel {
        height: 100%;
    }
`;

export const SHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    padding: 16px;
    max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        padding: 64px 32px 0;
    }
`;

export const SLogotype = styled.img.attrs({
    src: "/images/SLANGLATE.svg",
    alt: 'slanglate'
})`
    width: 55px;
    height: 25px;

    @media (min-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        width: 75px;
        height: 34px;
    }
`

export const SSkipButton = styled.span`
    cursor: pointer;
    font-size: 14px;

    @media (min-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        font-size: 18px;
    }
`;

const iconNextButton: JSX.Element = <img src={'/images/arrow-right-black.svg'} alt="" />;

export const SNextButton = styled(Button).attrs({
    icon: iconNextButton
})`
    &.ant-btn {
        z-index: 30;
        position: absolute;
        bottom: 30px;
        right: 16px;
        border-radius: 28px;
        width: 70px;
        height: 70px;
    }
`;

export const SCarousel = styled(Carousel).attrs({
    infinite: false
})`
    height: 100%;
    min-height: inherit;

    .slick-list,
    .slick-track,
    .slick-slide,
    .slick-slide > div,
    .slick-slide > div > div {
        height: 100%;
        overflow: hidden;
    }

    & .slick-dots-bottom {
        bottom: 60px;
    }

    .slick-dots li {
        height: 6px;

        & > button {
            height: 100%;
        }

        &.slick-active::after {
            height: 100%;
        }

        &:not(.slick-active) {
            width: 6px;
        }
    }
`;