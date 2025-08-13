import React, { useRef, useState } from 'react';
import { MobileOnboardAbout, MobileOnboardCreate, MobileOnboardForward, useOnboardStore } from '@/entities/onboard';

import { SCarousel, SHeader, SNextButton, SOnboardPage, SSkipButton } from './onboardPage.styles';
import { CarouselRef } from 'antd/es/carousel';

export const OnboardPage = () => {
    const { store, setPassed } = useOnboardStore();
    // if (store.isPassed) return null;

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
                <img src="/images/SLANGLATE.svg" alt="" style={{ width: '55px', height: '25px' }} />
                <SSkipButton onClick={setPassed}>Пропустить</SSkipButton>
            </SHeader>
            <SCarousel ref={carouselRef} afterChange={handleAfterChange}>
                <MobileOnboardAbout />
                <MobileOnboardCreate />
                <MobileOnboardForward />
            </SCarousel>
            <SNextButton onClick={handleNextSlide} />
        </SOnboardPage>
    );
};