import React, { ChangeEvent, FC, JSX, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import { useDevice } from '@/shared/hooks';
import { IconClose, IconSelect } from '@/shared/assets';

import {
    SToolbarButton,
    SLanguage,
    STextarea,
    SToolbar,
    STranslationInput
} from './translationTextarea.styles';
import { TranslationInputTextareaProps } from '../../model/translationTextarea.types';
import { desktopAutoSize, mobileAutoSize } from '../../lib/textareaAutoSize';

const iconClose: JSX.Element = <IconClose />;


export const TranslationInputTextarea: FC<TranslationInputTextareaProps> = ({ language, value, onChange, onClear }) => {
    const { isTablets } = useDevice();
    const [textareaValue, setTextareaValue] = useState(value);

    const debounceOnChange = useMemo(
        () =>
            debounce((translateSrc: string) => {
                onChange(translateSrc);
            }, 750),
        [value, onChange]
    );

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);
        debounceOnChange(event.target.value);
    };

    useEffect(() => {
        if (!value.length) {
            setTextareaValue('');
        }
    }, [value]);

    const autoSize = isTablets ? mobileAutoSize : desktopAutoSize;

    return (
        <STranslationInput>
            <SToolbar>
                <SLanguage><IconSelect />{language}</SLanguage>
                <SToolbarButton onClick={onClear} icon={iconClose} />
            </SToolbar>
            <STextarea value={textareaValue} onChange={handleChange} autoSize={autoSize}
                       placeholder={'Введите текст'} />
        </STranslationInput>
    );
};