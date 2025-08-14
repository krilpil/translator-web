import React, { useRef, useState } from 'react';
import {
    MobileOnboardAbout,
    MobileOnboardCreate,
    MobileOnboardForward,
    DesktopOnboardAbout,
    DesktopOnboardCreate,
    DesktopOnboardForward,
    useOnboardStore
} from '@/entities/onboard';

import { SCarousel, SHeader, SLogotype, SNextButton, SOnboardPage, SSkipButton } from './onboardPage.styles';
import { CarouselRef } from 'antd/es/carousel';
import { useDevice } from '@/shared/hooks';

export const OnboardPage = () => {
    const { setPassed } = useOnboardStore();
    const { isTablets } = useDevice();

    const carouselRef = useRef<CarouselRef | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        if (currentSlide >= 2) {
            setPassed();
        } else {
            carouselRef.current?.next();
        }
    };

    const handleAfterChange = (current: number) => {
        setCurrentSlide(current);
    };

    return (
        <SOnboardPage>
            <SHeader>
                <SLogotype />
                <SSkipButton onClick={setPassed}>Пропустить</SSkipButton>
            </SHeader>
            <SCarousel ref={carouselRef} afterChange={handleAfterChange}>
                {isTablets && <MobileOnboardAbout />}
                {isTablets && <MobileOnboardCreate />}
                {isTablets && <MobileOnboardForward />}

                {!isTablets && <DesktopOnboardAbout onNextSlide={handleNextSlide} />}
                {!isTablets && <DesktopOnboardCreate onNextSlide={handleNextSlide} />}
                {!isTablets && <DesktopOnboardForward onNextSlide={handleNextSlide} />}
            </SCarousel>

            {isTablets && <SNextButton onClick={handleNextSlide} />}
        </SOnboardPage>
    );
};