import React, { FC } from 'react';
import {
    SDescription,
    SDesktopOnboardAbout,
    SViewBox,
    STitle,
    SInformation,
    SImageOnboardForward,
    SNextButton, SCommunityButton
} from './desktopOnboard.styles';
import { DesktopOnboardProps } from '../../model/desktopOnboard.types';

export const DesktopOnboardForward: FC<DesktopOnboardProps> = ({ onNextSlide }) => {
    return (
        <SDesktopOnboardAbout>
            <SViewBox>
                <SInformation>
                    <STitle>Жми вперёд — и наслаждайся свободой перевода</STitle>
                    <SDescription>Не бойся пробовать новое — это место как раз для этого.</SDescription>
                    <SNextButton onClick={onNextSlide} />
                </SInformation>
                <SImageOnboardForward>
                    <SCommunityButton>Коммьюнити Slanglate</SCommunityButton>
                </SImageOnboardForward>
            </SViewBox>
        </SDesktopOnboardAbout>
    );
};