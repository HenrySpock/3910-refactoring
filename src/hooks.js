import { useState } from 'react';
import axios from 'axios';

function useFlip(initialFlipState = true) {
    const [isFlipped, setIsFlipped] = useState(initialFlipState);
    const toggleFlip = () => {
        setIsFlipped(prevFlipState => !prevFlipState);
    };

    return [isFlipped, toggleFlip];
}

function useAxios(url) {
    const [data, setData] = useState([]);

    const addData = async () => {
        const response = await axios.get(url);
        setData(oldData => [...oldData, response.data]);
    };

    return [data, addData];
}

export { useFlip, useAxios };  

 
