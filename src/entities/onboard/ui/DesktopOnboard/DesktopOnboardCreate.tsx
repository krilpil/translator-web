import React, { FC } from 'react';
import {
    SDescription,
    SDesktopOnboardAbout,
    SViewBox,
    STitle,
    SInformation,
    SImageOnboardCreate,
    SNextButton
} from './desktopOnboard.styles';
import { DesktopOnboardProps } from '../../model/desktopOnboard.types';

export const DesktopOnboardCreate: FC<DesktopOnboardProps> = ({ onNextSlide }) => {
    return (
        <SDesktopOnboardAbout>
            <SViewBox>
                <SInformation>
                    <STitle>Создавай, переводи и делись своими языками</STitle>
                    <SDescription>Никаких рамок — создавай свои языки и переводи так, как хочешь</SDescription>
                    <SNextButton onClick={onNextSlide} />
                </SInformation>
                <SImageOnboardCreate />
            </SViewBox>
        </SDesktopOnboardAbout>
    );
};