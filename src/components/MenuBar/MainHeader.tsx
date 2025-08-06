import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import FadeIn from '../../UI/FadeIn';

const headerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function MainHeader() {
    const isLibPage = location.pathname === '/Library';
    const userImg = window.Telegram?.WebApp?.initDataUnsafe.user;
    return (
        <header className="flex w-full justify-center">
            <div className="w-full" style={{ maxWidth: '930px' }}>
                <motion.nav aria-label="Global" className="flex items-center justify-between p-5" {...headerAnimation}>
                    <div className="flex-1">
                        <FadeIn>
                            <Link className="!font-bold" to="/">
                                <img src="/images/SLANGLATE.svg" alt="" className="h-[25px] w-[56px] md:h-[35px] md:w-[75px]" />
                            </Link>
                        </FadeIn>
                    </div>

                    {isLibPage ? (
                        <div className="flex gap-x-4">
                            <FadeIn>
                                <div>
                                    <p className="text-[18px] text-[#FFFFFF80]">Библиотека</p>
                                </div>
                            </FadeIn>
                        </div>
                    ) : (
                        <div className="flex gap-x-4">
                            <FadeIn>
                                <div>
                                    {userImg?.photo_url ? (
                                        <img src={userImg.photo_url} alt="Avatar" className="h-12 w-12 rounded-full object-cover" />
                                    ) : (
                                        <div className="h-[44px] w-[44px] rounded-full bg-gray-400 md:h-[50px] md:w-[50px]" />
                                    )}
                                </div>
                            </FadeIn>
                        </div>
                    )}
                </motion.nav>
            </div>
        </header>
    );
}
