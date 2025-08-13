import React from 'react';
import { SDescription, SInformation, SMobileOnboardAbout, STitle } from './mobileOnboard.styles';

export const MobileOnboardAbout = () => {
    return (
        <SMobileOnboardAbout>
            <SInformation>
                <STitle>Быстрый, удобный и просто классный переводчик</STitle>
                <SDescription>В этом разделе ты можешь познакомиться с интерфейсом</SDescription>
            </SInformation>
        </SMobileOnboardAbout>
    );
};