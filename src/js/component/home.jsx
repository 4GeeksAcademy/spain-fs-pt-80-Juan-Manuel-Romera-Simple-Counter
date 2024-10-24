import React from "react";
import { Digit } from "./Digit";

const Home = ({ counter }) => {
  const digitsArray = counter.toString().padStart(6, "0").split(""); 
  return (
    <div className="clock">
       <span className="fi fi-rr-clock"></span>{}
      {digitsArray.map((digit, index) => (
        <Digit key={index} digit={digit} />
      ))}
    </div>
  );
};

export default Home;
