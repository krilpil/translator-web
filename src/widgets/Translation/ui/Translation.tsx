import React from 'react';
import {
    useTranslationStore,
    TranslationInputTextareaProps,
    TranslationInputTextarea,
    TranslationOutputTextarea, useGetTranslate, TranslationLanguages
} from '@/entities/translation';

import { SAnimation, STextareaWrapper, STranslations } from './translation.styles';
import { message } from 'antd';
import { useTTS } from '@/shared/hooks';
import { createSearchParams, useNavigate } from 'react-router-dom';

export const Translation = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { store, setStore } = useTranslationStore();
    const { mutateAsync, isPending } = useGetTranslate();
    const navigate = useNavigate();
    const { speak } = useTTS();

    const handleChangeSrcValue: TranslationInputTextareaProps['onChange'] = (value) => {
        setStore({ srcValue: value });

        mutateAsync({
            srcLanguageId: store.srcLanguageId,
            dstLanguageId: store.dstLanguageId,
            text: value
        }).then(({ translatedText }) => {
            setStore({ dstValue: translatedText });
        }).catch(() => {
            setStore({ dstValue: '' });
        });
    };

    const handleClear: TranslationInputTextareaProps['onClear'] = () => {
        setStore({ srcValue: '', dstValue: '' });
    };

    const handleCopy = () => {
        if (store.dstValue) {
            void navigator.clipboard.writeText(store.dstValue);
            void messageApi.open({
                type: 'success',
                content: 'Скопировано!'
            });
        }
    };

    const handleLike = () => {
    };

    const handleSound = () => {
        if (store.dstValue) {
            speak(store.dstValue);
        }
    };

    const handleSwap = () => {
        setStore({
            dstLanguage: store.srcLanguage,
            dstLanguageId: store.srcLanguageId,
            srcLanguage: store.dstLanguage,
            srcLanguageId: store.dstLanguageId,
            srcValue: '',
            dstValue: ''
        });
    };

    const handleChangeDstLanguage = () => navigate({
        pathname: 'SelectLanguage',
        search: `?${createSearchParams({ lang: 'dst' })}`
    });

    const handleChangeSrcLanguage = () => navigate({
        pathname: 'SelectLanguage',
        search: `?${createSearchParams({ lang: 'src' })}`
    });

    return (
        <STranslations>
            <STextareaWrapper>
                {contextHolder}
                {/*<SAnimation />*/}
                <TranslationInputTextarea
                    language={store.srcLanguage}
                    value={store.srcValue}
                    onChangeSrcLanguage={handleChangeSrcLanguage}
                    onChange={handleChangeSrcValue}
                    onClear={handleClear}
                />
                <TranslationOutputTextarea
                    language={store.dstLanguage}
                    value={store.dstValue}
                    loading={isPending}
                    onChangeDstLanguage={handleChangeDstLanguage}
                    onSwap={handleSwap}
                    onCopy={handleCopy}
                    onLike={handleLike}
                    onSound={handleSound}
                />
            </STextareaWrapper>

            {/*<TranslationLanguages*/}
            {/*    srcLanguage={store.srcLanguage}*/}
            {/*    dstLanguage={store.dstLanguage}*/}
            {/*    onSwap={handleSwap}*/}
            {/*    onChangeDstLanguage={handleChangeDstLanguage}*/}
            {/*    onChangeSrcLanguage={handleChangeSrcLanguage}*/}
            {/*/>*/}
        </STranslations>
    );
};