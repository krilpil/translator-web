import { Link } from 'react-router-dom';
import FadeIn from '../UI/FadeIn';

export default function Masterskaya() {
    const icons = [
        { src: '/images/masterskaya/l1.png', label: 'Скуф' },
        { src: '/images/masterskaya/l2.png', label: 'Cударь' },
        { src: '/images/masterskaya/l3.png', label: 'Гопник' },
        { src: '/images/masterskaya/l4.png', label: 'Зумер' },
    ];

    const iconsRight = [
        { src: '/images/masterskaya/r1.png', label: 'Мои языки' },
        { src: '/images/masterskaya/r2.png', label: 'Рекомендуем' },
        { src: '/images/masterskaya/r3.png', label: 'Контакты' },
        { src: '/', label: '' },
    ];

    return (
        <div className="-mt-22">
            <FadeIn>
                <p className="font-helvetica text-2xl font-bold text-white">Мастерская</p>
                <div className="mt-3 flex flex-col gap-4 md:flex-row md:justify-between">
                    <Link to="/AboutPage" className="flex max-h-[90px] w-full cursor-pointer overflow-hidden rounded-[19px] bg-[#0B0B0B] p-[18px] sm:max-h-[110px]">
                        <div className="flex w-full items-center justify-between gap-4">
                            <div className="w-full">
                                <p className="font-helvetica mb-1.5 text-[18px] leading-none font-bold text-white md:text-[22px]">О проекте Slanglate</p>
                                <p className="font-helvetica mt-2.5 max-w-[185px] text-[12px] leading-[13.92px] font-normal text-[#9F9F9F] md:text-[14px]">
                                    Узнай чуть больше о том, чем ты пользуешься!
                                </p>
                            </div>
                            <div className="mt-[1px] shrink-0 overflow-hidden sm:mt-[11px]">
                                <img src="/images/masterskaya/S.svg" alt="" className="w-[101px] object-cover sm:w-full" />
                            </div>
                        </div>
                    </Link>

                    <div className="flex max-h-[90px] w-full cursor-pointer overflow-hidden rounded-[19px] border-1 bg-[#0B0B0B] p-[18px] sm:max-h-[110px]">
                        <div className="flex w-full items-center justify-between gap-2">
                            <div className="w-full max-w-[328px]">
                                <p className="font-helvetica mb-1.5 text-[18px] leading-none font-bold text-white md:text-[22px]">Создай свой язык</p>
                                <p className="font-helvetica mt-2.5 text-[12px] leading-[13.92px] font-normal text-[#9F9F9F] md:text-[14px]">
                                    Да, вот так просто, единственное ограничение — это твоя фантазия
                                </p>
                            </div>
                            <div className="shrink-0 overflow-hidden">
                                <img src="/images/masterskaya/rob.png" alt="" className="h-auto w-[88px] md:w-[120px]" />
                                {/* <video autoPlay loop muted playsInline className="h-auto w-[88px] md:w-[120px]">
                                    <source src={`/model/Zumer.webm`} type="video/webm" />
                                    Ваш браузер не поддерживает WebM.
                                </video> */}
                                {/* <img src="/model/Zumer.gif" alt="Зумер" className="h-auto w-[88px] md:w-[120px]" /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-1 lg:flex-row">
                    <div className="max-w-[440px]">
                        <p
                            className="font-helvetica mt-4 mb-2 font-normal text-[#9F9F9F]"
                            style={{
                                fontSize: '22.858px',
                            }}
                        >
                            Актуальное
                        </p>
                        <div className="m-auto flex justify-between gap-0 md:gap-10">
                            {icons.map(({ src, label }) => (
                                <div key={label} className="flex cursor-pointer flex-col items-center text-center">
                                    <div className="flex h-[75.448px] w-[76.928px] shrink-0 rounded-[17.416px] bg-[#0B0B0B] max-[440px]:h-[59px] max-[440px]:w-[61px]">
                                        <img src={src} alt={label} className="m-auto w-16 max-[440px]:h-[34px] max-[440px]:w-[45px]" />
                                    </div>
                                    <p className="mt-2 text-center font-['Helvetica'] text-sm font-normal text-white max-[440px]:text-xs">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-0 ml-0 md:mt-4 lg:ml-6">
                        <div className="max-w-[440px]">
                            <p
                                className="font-helvetica mb-2 font-normal text-[#9F9F9F]"
                                style={{
                                    fontSize: '22.858px',
                                }}
                            >
                                Прочее
                            </p>
                            <div className="m-auto flex justify-between gap-0 md:gap-10">
                                {iconsRight.map(({ src, label }, index) => (
                                    <div key={label} className="flex cursor-pointer flex-col items-center text-center">
                                        <div
                                            className={`flex h-[75.448px] w-[76.928px] shrink-0 rounded-[17.416px] ${index === 3 ? 'opacity-0' : ''} bg-[#0B0B0B] max-[440px]:h-[59px] max-[440px]:w-[61px]`}
                                        >
                                            <img src={src} alt="" className="m-auto w-16 max-[440px]:h-[50px] max-[440px]:w-[50px]" />
                                        </div>
                                        <p className="mt-2 text-center font-['Helvetica'] text-sm font-normal text-white max-[440px]:text-[11px]">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
