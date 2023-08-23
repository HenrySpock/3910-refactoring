// Step 1

// import { useState } from 'react';

// export function useFlip() {
//     const [isFlipped, setIsFlipped] = useState(true);
//     const toggle = () => {
//         setIsFlipped(!isFlipped);
//     };
//     return [isFlipped, toggle];
// }

// Step 2 

import { useState } from 'react';
import axios from 'axios';

export function useFlip() {
    const [isFlipped, setIsFlipped] = useState(true);
    const toggle = () => {
        setIsFlipped(!isFlipped);
    };
    return [isFlipped, toggle];
} 

export function useAxios(url) {
  const [data, setData] = useState([]);

  const addData = async () => {
    const response = await axios.get(url);
    setData(oldData => [...oldData, response.data]);
  };

  return [data, addData];
}
 
