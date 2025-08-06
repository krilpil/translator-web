import CustomTextArea from '../UI/CustomTextArea';
import { useUtilsStore } from '../services/store/utilsStore';
import { Link } from 'react-router-dom';
import Header from '../components/MenuBar/Header';

export default function Home() {
    const { leftLanguage, rightLanguage, setSelectedLanguage } = useUtilsStore();

    return (
        <>
            <div className="-mt-24">
                <Header></Header>
            </div>
            <div>
                <CustomTextArea />

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="mt-0 flex max-w-[200px] flex-1 cursor-pointer items-center justify-center rounded-xl bg-[#000000] p-2 text-center text-xl md:bg-[#0B0B0B]">
                        <p>{leftLanguage}</p>
                    </div>

                    <div className="mb-2 cursor-pointer">
                        {/* <img onClick={changeLanguage} src="/images/arrow.svg" alt="" /> */}
                        <img className="mt-2 w-7.5" src="/images/change.png" alt="arrow" />
                    </div>

                    <Link
                        to="/SelectLanguage"
                        onClick={() => {
                            setSelectedLanguage(1);
                        }}
                        className="mt-0 flex max-w-[200px] flex-1 cursor-pointer items-center justify-center rounded-xl bg-[#000000] p-2 text-center text-xl md:bg-[#0B0B0B]"
                    >
                        <p>{rightLanguage.name}</p>
                    </Link>
                </div>

                {/* <CustomTextArea /> */}
            </div>
        </>
    );
}
