import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, matchPath } from 'react-router-dom';
import Home from './pages/home';
import Library from './pages/Library';
import Masterskaya from './pages/Masterskaya';
import Header from './components/MenuBar/Header';
import Footer from './components/MenuBar/Footer';
import SavedTranslate from './pages/SavedTranslate';
import HistoryTranslate from './pages/HistoryTranslate';
import MainHeader from './components/MenuBar/MainHeader';
import SelectLanguage from './pages/SelectLanguage';
import { useHistoryStore } from './services/store/useHistoryStore';
import { useEffect, useState } from 'react';
import { auth } from './api/auth/auth.api';
import StandartInfo from './components/LanguageInfo/StandartInfo';
import './App.css';
import AboutPage from './pages/AboutPage';
import TranslatePanel from './UI/TranslatePanel';
import { useUtilsStore } from './services/store/utilsStore';

function AppWrapper() {
    const location = useLocation();
    const { sidebarOpen } = useUtilsStore();
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

    const isHomePage = location.pathname === '/';
    const isNarrowScreen = window.innerWidth > 768;

    const showToolbar = isHomePage && isWideScreen;

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const shouldHideHeader = () => {
        const noHeaderPatterns = ['/', '/SavedTranslate', '/HistoryTranslate', '/SelectLanguage', '/StandartInfo/:itemId', '/AboutPage'];
        return noHeaderPatterns.some((pattern) => matchPath(pattern, location.pathname));
    };

    const hideHeader = shouldHideHeader();
    const loadHistoryFromStorage = useHistoryStore((state) => state.loadHistoryFromStorage);

    useEffect(() => {
        const darkRoutes = ['/', '/SavedTranslate', '/HistoryTranslate', '/SelectLanguage'];
        const isDarkTheme = darkRoutes.includes(location.pathname) || location.pathname.startsWith('/Library');
        document.body.style.backgroundColor = isDarkTheme ? '#000000' : '#000000';
    }, [location.pathname]);

    useEffect(() => {
        const doLogin = async () => {
            try {
                const initData = window.Telegram?.WebApp?.initData;
                if (!initData) {
                    console.error('tg mini app only');
                    return;
                }

                const userData = await auth({ initData });
                console.log(userData.user);
            } catch (error) {
                console.error(error);
            }
        };
        doLogin();
    }, []);

    useEffect(() => {
        loadHistoryFromStorage();
    }, []);

    const shouldApplyPadding = !isHomePage || (isHomePage && isNarrowScreen);

    return (
        <>
            {!hideHeader && (isHomePage ? <Header /> : <MainHeader />)}

            {showToolbar && <>{sidebarOpen && <TranslatePanel />}</>}

            <div
                className={`mx-auto mt-20 mb-30 transition-all duration-300 ${shouldApplyPadding ? 'p-5' : ''}`}
                style={{
                    maxWidth: '930px',
                    transform: showToolbar && sidebarOpen ? 'translateX(-10rem)' : 'translateX(0)',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Library" element={<Library />} />
                    <Route path="/StandartInfo/:itemId" element={<StandartInfo />} />
                    <Route path="/Masterskaya" element={<Masterskaya />} />
                    <Route path="/AboutPage" element={<AboutPage />} />
                    <Route path="/SavedTranslate" element={<SavedTranslate />} />
                    <Route path="/HistoryTranslate" element={<HistoryTranslate />} />
                    <Route path="/SelectLanguage" element={<SelectLanguage />} />
                </Routes>
            </div>

            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <AppWrapper />
        </Router>
    );
}

export default App;
