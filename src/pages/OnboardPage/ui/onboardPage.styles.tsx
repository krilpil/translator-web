import styled from 'styled-components';
import { Button, Carousel } from 'antd';
import { JSX } from 'react';

export const SOnboardPage = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    & .ant-carousel {
        height: 100%;
    }
`;

export const SHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
`;

const iconNextButton: JSX.Element = <img src={'/images/arrow-right-black.svg'} alt="" />;

export const SSkipButton = styled.span`
    font-size: 14px;
`

export const SNextButton = styled(Button).attrs({
    icon: iconNextButton
})`
    &.ant-btn {
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