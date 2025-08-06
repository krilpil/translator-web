import { useState } from 'react';

export default function CustomInput() {
    const [input, setInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                value={input}
                onChange={handleChange}
                // placeholder="Введите текст..."
                className="h-[45px] w-full rounded-3xl bg-[#202020] p-4 pr-12 text-sm text-black outline-none dark:text-white"
            />

            <div className="absolute top-1/2 right-4 -translate-y-1/2 transform">
                <img src="/images/search.svg" alt="img" className="h-5 w-5" />
            </div>
        </div>
    );
}
