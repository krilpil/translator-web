import styled, { keyframes } from 'styled-components';

export const STranslations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
`

export const STextareaWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
        grid-template-columns: 1fr;
        padding: 0 8px;
        gap: 0;
    }
`

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`;

export const SAnimation = styled.div`
    --size: 200px;
    --speed: 15s;
    --easing: cubic-bezier(0.8, 0.6, 0.6, 0.8);
    
    position: absolute;
    top: calc(80% - var(--size));
    left: calc(87% - var(--size));
    transform: translate(-50%, -50%);
    
    opacity: 70%;
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(
            hsl(222 84% 60% / 100%),
            hsl(164 79% 71%)
    );
    animation: ${rotate} var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transition: all 0.5s ease-out;
`;