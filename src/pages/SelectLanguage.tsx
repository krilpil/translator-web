import { useEffect, useState } from 'react';
import FadeIn from '../UI/FadeIn';
import { defaultApi } from '../api/default/default.api';
import { useUtilsStore } from '../services/store/utilsStore';
import { useNavigate } from 'react-router-dom';
import { useHistoryStore } from '../services/store/useHistoryStore';

type Translation = {
    id: number;
    name: string;
    description: string;
    languageCode: string;
    isByUser: boolean;
};

export default function SelectLanguage() {
    const { setSelectedLanguage, setRightLanguage } = useUtilsStore();
    const { setWordToTranslate, setTranslated } = useHistoryStore();
    const [languageList, setLanguageList] = useState<Translation[]>();

    const navigate = useNavigate();

    const changeLang = (param: Translation) => {
        setWordToTranslate('');
        setTranslated('');
        setSelectedLanguage(param.id);
        setRightLanguage(param);
        navigate('/');
    };

    useEffect(() => {
        const doLanguage = async () => {
            try {
                const userData = await defaultApi();
                setLanguageList(userData);
            } catch (error) {
                console.error(error);
            }
        };

        doLanguage();
    }, []);

    return (
        <FadeIn>
            <div className="-mt-20">
                <div className="flex justify-between">
                    <p className="mb-5 text-xl font-bold">Определить язык</p>
                    <img className="mb-4 w-7" src="/images/image.svg" alt="img" />
                </div>

                <div className="my-3 h-[1px] self-center bg-[#787878]" />
                <p className="mt-5 mb-3 text-xl font-semibold">Все языки</p>

                <div className="ml-5 flex flex-col gap-3">
                    {languageList?.map((lang, index) => (
                        <div key={index}>
                            <p
                                onClick={() => {
                                    changeLang(lang);
                                }}
                                className="mb-3 cursor-pointer text-xl font-medium"
                            >
                                {lang.name}
                            </p>
                            {/* {lang.children && (
                                <div className="ml-4 text-xl">
                                    {lang.children.map((child, i) => (
                                        <div className="mb-3 cursor-pointer" key={i}>
                                            {child.name}
                                        </div>
                                    ))}
                                </div>
                            )} */}
                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}
