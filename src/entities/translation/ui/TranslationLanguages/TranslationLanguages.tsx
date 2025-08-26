import React, { FC } from 'react';
import { SLanguageButton, SSwapButton, STranslationLanguages } from './translationLanguages.styles';
import { TranslationLanguagesProps } from '../../model/translationLanguages.types';

export const TranslationLanguages: FC<TranslationLanguagesProps> = ({
                                                                        srcLanguage,
                                                                        dstLanguage,
                                                                        onSwap,
                                                                        onChangeSrcLanguage,
                                                                        onChangeDstLanguage
                                                                    }) => {
    return (
        <STranslationLanguages>
            <SLanguageButton onClick={onChangeSrcLanguage}>{srcLanguage}</SLanguageButton>
            <SSwapButton onClick={onSwap} />
            <SLanguageButton onClick={onChangeDstLanguage}>{dstLanguage}</SLanguageButton>
        </STranslationLanguages>
    );
};