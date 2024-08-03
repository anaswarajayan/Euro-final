import React from "react";
import Header from "./Header";
import BetOption from "./BetOption.js";
import Footer from "./Footer";
import "./App.css";
import "./BetOption.css";
import "./Header.css";
import "./Footer.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="bet-options">
        <BetOption
          country="Spain"
          percentage={28}
          flag="/images/Flag_of_Spain.png"
        />
        <BetOption
          country="England"
          percentage={72}
          flag="/images/England-flag.png"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
