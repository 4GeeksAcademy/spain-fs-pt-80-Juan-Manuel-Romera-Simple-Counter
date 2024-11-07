import React from "react";
import { Digit } from "./Digit";

const Home = ({ counter, startTimer, stopTimer, resetTimer, formatLength = 6, color = "limegreen" }) => {
  const digitsArray = counter.toString().padStart(formatLength, "0").split("");

  return (
    <div>
      <div className="clock">
        <span className="fi fi-rr-clock"></span>
        {digitsArray.map((digit, index) => (
          <Digit key={index} digit={digit} digitStyle={{ color }} />
        ))}
      </div>
      <div className="buttons">
        <button className="btn btn-primary" onClick={startTimer}>Iniciar</button>
        <button className="btn btn-secondary mx-2" onClick={stopTimer}>Detener</button>
        <button className="btn btn-danger" onClick={resetTimer}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Home;

//mport React from "react";
//mport { Digit } from "./Digit";
//
//onst Home = ({ counter }) => {
// const digitsArray = counter.toString().padStart(6, "0").split(""); 
//
// return (
//   <div className="clock">
//     <span className="fi fi-rr-clock"></span>
//     {digitsArray.map((digit, index) => (
//       <Digit 
//         key={index} 
//         digit={digit} 
//         digitStyle={{ color: "limegreen" }} 
//       />
//     ))}
//   </div>
// );
//;
//
//xport default Home;

//import React from "react";
//import { Digit } from "./Digit";
//
//const Home = ({ counter }) => {
//  const digitsArray = counter.toString().padStart(6, "0").split(""); 
//  return (
//    <div className="clock">
//       <span className="fi fi-rr-clock"></span>{}
//      {digitsArray.map((digit, index) => (
//        <Digit key={index} digit={digit} />
//      ))}
//    </div>
//  );
//};
//
//export default Home;
