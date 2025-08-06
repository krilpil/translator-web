import FadeIn from '../../UI/FadeIn';

export default function Empty() {
    return (
        <FadeIn>
            <div className="flex h-screen flex-col items-center justify-start pt-2 text-center">
                <img src="/images/duck.png" alt="Пусто" className="max-w-[176px]" />
                <p className="text-xl text-gray-400">Здесь пока пусто</p>
            </div>
        </FadeIn>
    );
}
