import { useEffect, useRef, useState } from 'react';

export function useTTS(defaultLang = 'en-US') {
    const [speaking, setSpeaking] = useState(false);
    const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

    useEffect(() => {
        const load = () => voiceRef.current =
            speechSynthesis.getVoices().find(v => v.lang?.startsWith(defaultLang)) || null;
        if (speechSynthesis.getVoices().length) load();
        else speechSynthesis.onvoiceschanged = load;
    }, [defaultLang]);

    const speak = (text: string, opts?: { rate?: number; pitch?: number; volume?: number }) => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = defaultLang;
        if (voiceRef.current) u.voice = voiceRef.current;
        if (opts?.rate) u.rate = opts.rate;
        if (opts?.pitch) u.pitch = opts.pitch;
        if (opts?.volume) u.volume = opts.volume;
        u.onstart = () => setSpeaking(true);
        u.onend = u.onerror = () => setSpeaking(false);
        speechSynthesis.speak(u);
    };

    return {
        speak, speaking, pause: () => speechSynthesis.pause(),
        resume: () => speechSynthesis.resume(),
        stop: () => speechSynthesis.cancel()
    };
}
