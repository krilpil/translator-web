import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <div className="-mt-20">
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <Link className="!font-bold" to="/">
                            <img src="/images/SLANGLATE.svg" alt="" style={{ width: '75px', height: '35px' }} />
                        </Link>
                    </div>

                    <div className="font-helvetica absolute left-1/2 hidden -translate-x-1/2 transform text-2xl leading-relaxed font-bold text-white md:block">О приложении</div>

                    <div className="flex flex-col items-end gap-y-2">
                        <div className="flex gap-x-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white pb-1 text-xl font-normal text-black">ru</div>
                            <Link to="/Masterskaya">
                                <img src="/images/close.svg" alt="" className="mt-1.5" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="font-helvetica mt-3 block text-2xl leading-relaxed font-bold text-white md:hidden">О приложении</div>
            </div>

            <div className="relative mt-8 flex flex-col items-center">
                <div className="relative z-5 w-full max-w-[574px]" style={{ transform: 'translateY(-10px)' }}>
                    <img src="/images/masterskaya/about.png" alt="Link" className="h-full w-full object-cover" />
                </div>
            </div>

            <div>
                <div className="wrap flex flex-col sm:flex-row">
                    <p className="font-helvetica mb-2 text-sm leading-[14px] font-light whitespace-nowrap text-white sm:mr-[57px] sm:mb-0">/slanglate</p>
                    <div>
                        <p className="text-base leading-[20px] font-normal text-white sm:text-xl" style={{ fontFamily: 'Teletactile, sans-serif' }}>
                            Я сделал этот шуточный переводчик для всех, но я не могу уследить за всеми сленговыми словами в одиночку, как бы ни старался.
                        </p>
                        <p className="mt-5 text-base leading-[20px] font-normal text-white sm:text-xl" style={{ fontFamily: 'Teletactile, sans-serif' }}>
                            Так что, если вы хотите как-либо поучаствовать в создании приложения, приветствуется всё: от кардинально новых предложений до лёгких правок.
                        </p>
                    </div>
                </div>

                <div className="wrap mt-2 flex flex-col sm:mt-8 md:flex-row">
                    <p className="font-helvetica mt-2 mb-2 text-sm leading-[14px] font-light whitespace-nowrap text-white sm:mr-[57px] sm:mb-0">/количество</p>

                    <div className="flex flex-1 flex-col sm:items-center sm:justify-between md:flex-row">
                        <p className="sm:text-[35px mb-4 text-xl text-[28px] leading-[20px] font-normal text-white" style={{ fontFamily: 'Teletactile, sans-serif' }}>
                            <label className="font-teletactile text-[57px] leading-[40px] font-normal text-white sm:leading-[57px]">20+</label>
                            <span className="ml-[5px] text-[35px]">языков</span>
                        </p>

                        <div className="relative h-12 w-full rounded-[68.75px] bg-white sm:w-80">
                            <div className="flex h-full w-[calc(100%-58px)] items-center justify-between rounded-[68.75px] border border-white bg-black px-2 sm:w-64">
                                <p className="mt-[-3px] ml-2 text-base font-light text-white sm:text-xl">Попробовать</p>
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
        </div>
    );
}
