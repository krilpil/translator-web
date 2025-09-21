import React, { FC, JSX } from 'react';
import {
    SGlowTextarea,
    SLanguage, STranslationOutputTextarea, STextarea,
    SToolbar, SToolbarButton, SToolbarGroup,
    STranslationOutput
} from './translationTextarea.styles';
import { IconCopy, IconLike, IconSelect, IconSound, IconSwap } from '@/shared/assets';
import { TranslationOutputTextareaProps } from '../../model/translationTextarea.types';
import { desktopAutoSize, mobileAutoSize } from '@/entities/translation/lib/textareaAutoSize';
import { useDevice } from '@/shared/hooks';

const iconCopy: JSX.Element = <IconCopy />;
const iconLike: JSX.Element = <IconLike />;
const iconSound: JSX.Element = <IconSound />;
const iconSwap: JSX.Element = <IconSwap />;

export const TranslationOutputTextarea: FC<TranslationOutputTextareaProps> = ({
                                                                                  language,
                                                                                  value,
                                                                                  loading,
                                                                                  onChangeDstLanguage,
                                                                                  onSwap,
                                                                                  onLike,
                                                                                  onCopy,
                                                                                  onSound
                                                                              }) => {
    const { isTablets } = useDevice();

    const isDisabled = !value.length;
    const isLargeText = value.length <= 20;
    const textareaValue = loading ? 'Переводим...' : value;

    const autoSize = isTablets ? mobileAutoSize : desktopAutoSize;

    return (
        <STranslationOutputTextarea>
            {!!textareaValue && <SGlowTextarea largeText={isLargeText}>{textareaValue}</SGlowTextarea>}

            <STranslationOutput>
                <SToolbar>
                    <SLanguage onClick={onChangeDstLanguage}><IconSelect />{language}</SLanguage>
                    <SToolbarGroup>
                        <SToolbarButton icon={iconSwap} onClick={onSwap} />
                        <SToolbarButton icon={iconCopy} onClick={onCopy} />
                        <SToolbarButton icon={iconLike} onClick={onLike} />
                        <SToolbarButton icon={iconSound} onClick={onSound} />
                    </SToolbarGroup>
                </SToolbar>
                <STextarea
                    disabled={isDisabled}
                    largeText={isLargeText}
                    value={textareaValue}
                    autoSize={autoSize}
                    placeholder={'Перевод'}
                />
            </STranslationOutput>
        </STranslationOutputTextarea>
    );
};