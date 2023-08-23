// Step 1

import { useState } from 'react';

export function useFlip() {
    const [isFlipped, setIsFlipped] = useState(true);
    const toggle = () => {
        setIsFlipped(!isFlipped);
    };
    return [isFlipped, toggle];
}

