import { Link, useLocation } from 'react-router-dom';

const footerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function Footer() {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path: string) => currentPath === path;

    return (
        <footer className="fixed bottom-0 z-100 w-full bg-black px-0 sm:px-5">
            <div aria-label="Footer" className="flex max-h-[82px] justify-center p-5" {...footerAnimation}>
                <div className="flex w-full items-center justify-center gap-[45px] sm:gap-[60px]">
                    <Link
                        to="/Library"
                        className={`flex max-h-[55px] flex-col items-center text-center text-[12px] font-bold sm:text-[16px] ${
                            isActive('/Library') ? 'text-white' : 'text-[#919191]'
                        }`}
                    >
                        <img src={isActive('/Library') ? '/images/libLi.png' : '/images/lib.png'} alt="Library" className="w-[24px] sm:w-[35px]" />
                        Библиотека
                    </Link>

                    <Link
                        to="/"
                        className={`flex max-h-[55px] flex-col items-center text-center text-[12px] font-bold sm:text-[16px] ${isActive('/') ? 'text-white' : 'text-[#919191]'}`}
                    >
                        <img src={isActive('/') ? '/images/trans1.svg' : '/images/trans.svg'} alt="Translator" className="w-[24px] sm:w-[35px]" />
                        Переводчик
                    </Link>

                    <Link
                        to="/Masterskaya"
                        className={`flex max-h-[55px] flex-col items-center text-center text-[12px] font-bold sm:text-[16px] ${
                            isActive('/Masterskaya') ? 'text-white' : 'text-[#919191]'
                        }`}
                    >
                        <img src={isActive('/Masterskaya') ? '/images/masterLi.png' : '/images/master.png'} alt="Masterskaya" className="w-[24px] sm:w-[35px]" />
                        Мастерская
                    </Link>
                </div>
            </div>
        </footer>
    );
}
