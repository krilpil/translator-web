import FadeIn from '../UI/FadeIn';
import Empty from '../components/Empty/Empty';
import TranslateItem from '../components/GridMenu/TranslateItem';
import { getTranslation } from '../api/translation/translation.api';
import { useEffect, useState } from 'react';

type Translation = {
    id: number;
    languageId: number;
    srcText: string;
    languageName: string;
    translationText: string;
    userId: number;
};

export default function SavedTranslate() {
    const [translations, setTranslations] = useState<Translation[]>([]);
    const hasTranslate = translations.length > 0;

    useEffect(() => {
        const fetchTranslations = async () => {
            try {
                const data = await getTranslation();
                setTranslations(data.items || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTranslations();
    }, []);

    return (
        <FadeIn>
            <div className="-mt-20">
                <p className="mb-7 text-xl font-bold">Избранное</p>

                <div className="my-3 h-[1px] self-center bg-[#787878]" />

                {hasTranslate ? (
                    <div>
                        {translations.map((item, index) => (
                            <TranslateItem
                                key={index}
                                id={item.id}
                                leftLanguage={'Русский'}
                                rightLanguage={`${item.languageName}`}
                                leftTranslate={item.srcText}
                                rightTranslate={item.translationText}
                                isLike={true}
                                onDelete={() => {
                                    setTranslations((prev) => prev.filter((i) => i.id !== item.id));
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <Empty />
                )}
            </div>
        </FadeIn>
    );
}
