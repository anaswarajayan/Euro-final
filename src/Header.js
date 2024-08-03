import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [betAmount, setBetAmount] = useState(13800);
  const [timeLeft, setTimeLeft] = useState("23:10:24");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const [hours, minutes, seconds] = prev.split(":").map(Number);
        const newTime = new Date(0, 0, 0, hours, minutes, seconds - 1);
        return newTime.toTimeString().split(" ")[0];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <h1>Euro Final 2024</h1>
      <div className="bet-info">
        <span>Collected Bet Amount: ${betAmount.toFixed(1)}k</span>
        <span>Ends in {timeLeft}</span>
      </div>
    </div>
  );
}

export default Header;
