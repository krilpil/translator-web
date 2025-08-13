import React from 'react';
import { SCommunityButton, SDescription, SInformation, SMobileOnboardForward, STitle } from './mobileOnboard.styles';

export const MobileOnboardForward = () => {
    return (
        <SMobileOnboardForward>
            <SInformation>
                <SCommunityButton>Коммьюнити Slanglate</SCommunityButton>
                <STitle>Жми вперёд — <br /> и наслаждайся свободой перевода</STitle>
                <SDescription>Не бойся пробовать новое — <br /> это место как раз для этого</SDescription>
            </SInformation>
        </SMobileOnboardForward>
    );
};