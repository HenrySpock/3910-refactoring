import { useState } from 'react';

function useFlip(initialFlipState = true) {
    const [isFlipped, setIsFlipped] = useState(initialFlipState);
    const toggleFlip = () => {
        setIsFlipped(prevFlipState => !prevFlipState);
    };

    return [isFlipped, toggleFlip];
}

export { useFlip };
