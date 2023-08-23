// import React, { useState } from "react";
// import backOfCard from "./back.png";
// import "./PlayingCard.css"

// /* Renders a single playing card. */
// function PlayingCard({ front, back = backOfCard }) {
//   const [isFacingUp, setIsFacingUp] = useState(true);
//   const flipCard = () => {
//     setIsFacingUp(isUp => !isUp);
//   };
//   return (
//     <img
//       src={isFacingUp ? front : back}
//       alt="playing card"
//       onClick={flipCard}
//       className="PlayingCard Card"
//     />
//   );
// }

// export default PlayingCard;

// Step 1

import React from 'react';
import { useFlip } from './hooks';
import "./PlayingCard.css" 
import cardBack from './back.png'; 

function PlayingCard({ front }) {
    const [isFacingUp, flipCard] = useFlip();

    return (
        <div onClick={flipCard}>
            {isFacingUp ? (
                <img src={front} alt="Card Front" />
            ) : (
                <img src={cardBack} alt="Card Back" />
            )}
        </div>
    );
}

export default PlayingCard;


