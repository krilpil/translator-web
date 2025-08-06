import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import FadeIn from '../../UI/FadeIn';
import { useUtilsStore } from '../../services/store/utilsStore';
import { useState } from 'react';

const headerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function Header() {
    const { setSidebarOpen, setView } = useUtilsStore();
    const navigate = useNavigate();

    const [isMobile] = useState(window.innerWidth < 768);

    const handleClick = (e: React.MouseEvent, query: 'history' | 'likes', route: string) => {
        if (window.innerWidth > 1280) {
            e.preventDefault();
            setSidebarOpen(true);
            setView(query);
        } else {
            navigate(route);
        }
    };

    return (
        <header className="flex w-full justify-between" style={isMobile ? { padding: '20px' } : {}}>
            <div className="w-full">
                <motion.nav aria-label="Global" className="flex items-center justify-between py-5" {...headerAnimation}>
                    <div className="flex-1">
                        <FadeIn>
                            <Link className="!font-bold" to="/">
                                <img src="/images/SLANGLATE.svg" alt="" className="h-[25px] w-[56px] md:h-[35px] md:w-[75px]" />
                            </Link>
                        </FadeIn>
                    </div>

                    <div className="flex gap-x-4">
                        <FadeIn>
                            <Link to="/HistoryTranslate" onClick={(e) => handleClick(e, 'history', '/HistoryTranslate')}>
                                <img className="cursor-pointer" src="/images/History.svg" alt="" />
                            </Link>
                        </FadeIn>

                        <FadeIn>
                            <Link to="/SavedTranslate" onClick={(e) => handleClick(e, 'likes', '/SavedTranslate')}>
                                <img className="cursor-pointer" src="/images/Save.svg" alt="" />
                            </Link>
                        </FadeIn>
                    </div>
                </motion.nav>
            </div>
        </header>
    );
}
