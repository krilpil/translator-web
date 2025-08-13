import React from 'react';
import { SDescription, SInformation, SMobileOnboardCreate, STitle } from './mobileOnboard.styles';

export const MobileOnboardCreate = () => {
    return (
        <SMobileOnboardCreate>
            <SInformation>
                <STitle>Создавай, переводи и делись своими языками</STitle>
                <SDescription>Никаких рамок — создавай свои языки и переводи так, как хочешь</SDescription>
            </SInformation>
        </SMobileOnboardCreate>
    );
};