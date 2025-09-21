import React from 'react';

import {
    SAbout,
    SAboutInfo,
    SAboutPage,
    SAboutTitle, SAvatars,
    SCloseButton, SDescription,
    SHeader,
    SLogotype,
    SMain, STags,
    STitle, SUsers, SUsersCount
} from './aboutPage.styles';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
    return (
        <SAboutPage>
            <SMain>
                <SHeader>
                    <SLogotype />
                    <STitle>О приложении</STitle>
                    <Link to={'/Masterskaya'}><SCloseButton /></Link>
                </SHeader>

                <SAbout>
                    <SAboutTitle>Что такое <strong>Slanglate?</strong></SAboutTitle>
                    <SAboutInfo>
                        <STags>
                            <span>переводчик</span>
                            <span>коммьюнити</span>
                            <span>еще чето</span>
                        </STags>
                        <SUsers>
                            <SUsersCount>
                                <strong>1000+</strong>
                                <span>активных пользователей</span>
                            </SUsersCount>
                            <SAvatars />
                        </SUsers>
                    </SAboutInfo>
                </SAbout>

                <SDescription>
                    Привет, <strong>пользователь Slanglate.</strong> Это приложение
                    создано <strong>энтузиастами</strong> для
                    таких же <strong>энтузиастов.</strong> Оно
                    предназначено для <strong>веселья</strong>, так что не стесняйся создавать
                    любой <strong>контент</strong> связанный с нами или указывать на ошибки, которые мешают
                    тебе <strong>наслаждаться</strong> приложением. Текущий
                    функционал, по сути, простоват, но в этом его прелесть дальше будем его расширять.
                    Если у тебя есть <strong>предложения</strong> или
                    вопросы, <strong>пиши</strong> сюда <strong>ответим</strong> всем!
                </SDescription>
            </SMain>
        </SAboutPage>
    );
};