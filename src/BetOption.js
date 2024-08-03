import React from "react";
import "./BetOption.css";

function BetOption({ country, percentage, flag }) {
  return (
    <div className="bet-option">
      <img src={flag} alt={`${country} flag`} className="flag" />
      <div className="bet-details">
        <span>
          {percentage}% {country}
        </span>
        <button className="bet-button">Bet 0.5 SOL</button>
      </div>
    </div>
  );
}

export default BetOption;
