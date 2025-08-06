import { useEffect, useRef, useState } from 'react';
import BaseInput from '../UI/BaseInput';
import FadeIn from '../UI/FadeIn';
import Item from '../components/Library/Item';

export default function Library() {
    const icons = [
        { imgName: 'Skuf', label: 'Русский скуф' },
        { imgName: 'Elite', label: 'Русский сударь' },
        { imgName: 'Gopnik', label: 'Русский Гопник' },
        { imgName: 'Zumer1', label: 'Русский Зумер' },
        { imgName: 'Zumer', label: 'HOOD' },
        { imgName: 'Bot', label: 'custom' },
        { imgName: 'Info', label: 'словарь' },
    ];

    const videoRefs = useRef<HTMLVideoElement[]>([]);
    const [readyCount, setReadyCount] = useState(0);

    const handleReady = () => setReadyCount((prev) => prev + 1);

    useEffect(() => {
        if (readyCount === icons.length) {
            videoRefs.current.forEach((video) => {
                if (video) {
                    video.currentTime = 0;
                    video.play().catch((err) => console.warn('Video play error:', err));
                }
            });
        }
    }, [readyCount]);

    return (
        <div className="-mt-30">
            <FadeIn>
                <div className="mt-6">
                    <BaseInput />

                    <div className="mt-3">
                        <div className="flex flex-nowrap gap-3 pb-1" style={{ scrollbarWidth: 'none' }}>
                            {['Стандартные', 'Пользовательские'].map((label, i) => (
                                <div
                                    key={i}
                                    className="font-helvetica flex h-[34px] w-[49.3%] flex-shrink-0 cursor-pointer items-center justify-center gap-[10px] rounded-[31px] bg-[#171717] px-[15px] py-[20px] text-center text-[14px] leading-[100%] font-normal tracking-[-0.12px] text-white sm:h-[35px]"
                                >
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
                        {icons.map((item, index) => (
                            <Item
                                key={index}
                                imgName={item.imgName}
                                onReady={handleReady}
                                setVideoRef={(el: HTMLVideoElement) => (videoRefs.current[index] = el)}
                                naming={item.label}
                            />
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
