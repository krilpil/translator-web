import React, { FC } from 'react';
import {
    SDescription,
    SDesktopOnboardAbout,
    SViewBox,
    STitle,
    SInformation,
    SImageOnboardAbout,
    SNextButton
} from './desktopOnboard.styles';
import { DesktopOnboardProps } from '../../model/desktopOnboard.types';

export const DesktopOnboardAbout: FC<DesktopOnboardProps> = ({ onNextSlide }) => {
    return (
        <SDesktopOnboardAbout>
            <SViewBox>
                <SInformation>
                    <STitle>Быстрый, удобный и просто классный переводчик</STitle>
                    <SDescription>В этом разделе ты можешь познакомиться с интерфейсом</SDescription>
                    <SNextButton onClick={onNextSlide} />
                </SInformation>
                <SImageOnboardAbout />
            </SViewBox>
        </SDesktopOnboardAbout>
    );
};