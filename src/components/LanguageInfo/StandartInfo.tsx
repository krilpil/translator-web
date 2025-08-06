import { Link, useParams } from 'react-router-dom';
import FadeIn from '../../UI/FadeIn';
import './Marquee.css';

export default function StandartInfo() {
    const { itemId } = useParams();

    const icons = [
        { imgName: 'Skuf', label: 'Русский скуф' },
        { imgName: 'Elite', label: 'Русский сударь' },
        { imgName: 'Gopnik', label: 'Русский Гопник' },
        { imgName: 'Zumer1', label: 'Русский Зумер' },
        { imgName: 'Zumer', label: 'HOOD' },
        { imgName: 'Bot', label: 'custom' },
        { imgName: 'Info', label: 'словарь' },
    ];

    const currentLang = icons.find((item) => item.imgName === itemId);

    return (
        <div className="-mt-20">
            <FadeIn>
                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <Link className="!font-bold" to="/">
                                <img src="/images/SLANGLATE.svg" alt="" style={{ width: '75px', height: '35px' }} />
                            </Link>
                        </div>
                        <div className="flex gap-x-4">
                            <div className="flex gap-x-4">
                                <div>
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white pb-1 text-xl font-normal text-black">ru</div>
                                </div>
                            </div>
                            <Link to="/Library">
                                <img src="/images/close.svg" alt="" className="mt-1.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative mt-8 flex flex-col items-center">
                    <div className="relative z-5 w-full max-w-[231px]" style={{ transform: 'translateY(-10px)' }}>
                        <video autoPlay loop muted playsInline className="h-auto w-full" style={{ background: 'transparent' }}>
                            <source src={`/model/${currentLang?.imgName}.webm`} type="video/webm" />
                            Ваш браузер не поддерживает WebM.
                        </video>
                    </div>

                    {currentLang && (
                        <div className="absolute top-0 right-0 left-0 z-0 flex h-full w-full flex-col justify-center">
                            <div className="marquee-container">
                                <div className="marquee-content">
                                    {[...Array(12)].map((_, i) => (
                                        <span key={`left-${i}`} className="marquee-item">
                                            {currentLang.label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="marquee-container mt--10">
                                <div className="marquee-content-right">
                                    {[...Array(12)].map((_, i) => (
                                        <span key={`right-${i}`} className="marquee-item">
                                            {currentLang.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <div className="wrap flex flex-col sm:flex-row">
                        <p className="font-helvetica mb-2 text-sm leading-[14px] font-light whitespace-nowrap text-white sm:mr-[57px] sm:mb-0">/о языке</p>
                        <p className="text-base leading-[20px] font-normal text-white sm:text-xl" style={{ fontFamily: 'Teletactile, sans-serif' }}>
                            Язык, соединивший в себе все относительно популярные сленговые слова и фразочки! Язык, соединивший в себе все относительно популярные Язык, соединивший
                            в себе все относительно
                        </p>
                    </div>

                    <div className="wrap mt-4 flex flex-col sm:mt-8 sm:flex-row">
                        <p className="font-helvetica mb-2 text-sm leading-[14px] font-light whitespace-nowrap text-white sm:mr-[57px] sm:mb-0">/словарь</p>
                        <p className="text-xl text-[28px] leading-[20px] font-normal text-white sm:text-[35px]" style={{ fontFamily: 'Teletactile, sans-serif' }}>
                            <label className="font-teletactile text-[57px] leading-[40px] font-normal text-white sm:leading-[57px]">200+</label>
                            <span className="ml-[5px] text-[35px]">слов</span>
                        </p>
                    </div>

                    <div className="wrap mt-5 flex flex-col sm:mt-8 sm:flex-row">
                        <p className="font-helvetica mb-2 text-sm leading-[14px] font-light whitespace-nowrap text-white sm:mr-[57px] sm:mb-0">/автор</p>

                        <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div className="mr-3 mb-5 flex items-center sm:mb-0">
                                <p
                                    className="ml-0 text-xl text-[35px] leading-[20px] font-normal text-white sm:ml-5 sm:text-[35px]"
                                    style={{ fontFamily: 'Teletactile, sans-serif' }}
                                >
                                    Nigger
                                </p>
                                <div className="ml-3 flex h-[34px] w-[34px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white">
                                    <img src="/images/jpgImg/tg.jpg" alt="Telegram" className="object-cover" />
                                </div>
                            </div>

                            <div className="relative h-12 w-full rounded-[68.75px] bg-white sm:w-80">
                                <div className="flex h-full w-[calc(100%-58px)] items-center justify-between rounded-[68.75px] border border-white bg-black px-2 sm:w-64">
                                    <p className="mt-[-3px] ml-2 text-base font-normal text-white sm:text-xl">Попробовать</p>
                                    <div className="h-[30px] w-[30px] cursor-pointer overflow-hidden rounded-full bg-white">
                                        <img src="/images/jpgImg/link.png" alt="Link" className="h-full w-full object-cover" />
                                    </div>
                                </div>
                                <div className="absolute top-1/2 right-5 h-[30px] w-[30px] -translate-y-1/2 transform cursor-pointer overflow-hidden rounded-full bg-white">
                                    <img src="/images/jpgImg/repost.jpg" alt="Link" className="mt-[-1px] h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
