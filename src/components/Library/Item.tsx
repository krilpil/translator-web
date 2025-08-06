import { useNavigate } from 'react-router-dom';
import FadeIn from '../../UI/FadeIn';
import { useEffect, useRef } from 'react';

interface IProps {
    imgName: string;
    naming: string;
    onReady: () => void;
    setVideoRef: (el: HTMLVideoElement) => void;
}

export default function Item({ imgName, naming, onReady, setVideoRef }: IProps) {
    const navigate = useNavigate();
    const ref = useRef<HTMLVideoElement | null>(null);

    const goTo = () => {
        navigate(`/StandartInfo/${imgName}`);
    };

    useEffect(() => {
        const video = ref.current;
        if (!video) return;

        const handleCanPlayThrough = () => onReady();

        video.addEventListener('canplaythrough', handleCanPlayThrough);
        setVideoRef(video);

        return () => {
            video.removeEventListener('canplaythrough', handleCanPlayThrough);
        };
    }, []);

    return (
        <div>
            <style>
                {`
                    .naming-text {
                        color: white;
                        font-size: 38px;
                        font-family: Helvetica;
                        font-weight: 700;
                        line-height: 32px;
                        word-wrap: break-word;
                        text-transform: uppercase;
                        max-width: 270px;
                    }

                    .h-text {
                            min-height: 172px
                        }

                    @media (max-width: 390px) {
                        .naming-text {
                            font-size: 34px;
                        }
                    }

                    @media (max-width: 390px) {
                        .video-size {
                            width: 110px !important;
                        }
                    }

                    @media (max-width: 390px) {
                        .h-text {
                            min-height: 162px
                        }
                    }

                    @media (max-width: 350px) {
                        .naming-text {
                            font-size: 29px;
                            max-width: 190px;
                            transform: translateY(-12px);
                        }
                    }

                    @media (max-width: 350px) {
                        .video-size {
                            width: 97px !important;
                        }
                    }

                    @media (max-width: 350px) {
                        .h-text {
                            min-height: 144px
                        }
                    }

                    @media (max-width: 330px) {
                        .naming-text {
                            font-size: 24px;
                            max-width: 160px;
                            transform: translateY(-16px);
                        }
                    }

                    @media (max-width: 330px) {
                        .video-size {
                            width: 87px !important;
                        }
                    }

                    @media (max-width: 330px) {
                        .h-text {
                            min-height: 134px
                        }
                    }
                `}
            </style>
            <FadeIn>
                <div onClick={goTo} className="h-text relative flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border-1 bg-black p-5 text-white md:flex-row">
                    <div className="pointer-events-none absolute top-1/3 right-0 z-0 mt-3 mr-3 -translate-y-1/2">
                        <video
                            ref={ref}
                            src={`/model/${imgName}.webm`}
                            muted
                            loop
                            preload="auto"
                            playsInline
                            className="h-auto w-[128px] bg-transparent sm:w-[128px] [@media(max-width:390px)]:w-[110px]"
                        />
                    </div>

                    <div className="relative z-10 mt-6 flex flex-col">
                        <p className="naming-text">{naming}</p>
                    </div>

                    <div className="absolute right-5 bottom-5 left-5">
                        <div className="relative flex justify-between">
                            <p className="text-sm font-extralight" style={{ fontFamily: 'Arimo' }}>
                                nigger
                            </p>
                            <img src="/images/open.svg" alt="" className="absolute right-0 bottom-0" style={{ width: '24px', height: '24px' }} />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
