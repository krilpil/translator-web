import React from 'react';

import { SContent, SDescription, SImageNotFound, SNextButton, SNotFoundPage, STitle } from './notFoundPage.styles';

export const NotFoundPage = () => {
    return (
        <SNotFoundPage>
            <SContent>
                <STitle>Кажется, страница <br /> не найдена :с</STitle>
                <SDescription>Попробуй зайти позже! Или оставь обратную связь в нашем сообществе</SDescription>
                <SNextButton>Вернуться назад</SNextButton>
            </SContent>
            <SImageNotFound />
        </SNotFoundPage>
    );
};