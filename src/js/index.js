import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let intervalId = null;

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);

  const stopTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <div className="app-container">
      <Home counter={counter} />
      <div className="buttons">
        <button className="btn btn-primary" onClick={startTimer}>Iniciar</button>
        <button className="btn btn-secondary mx-2" onClick={stopTimer}>Detener</button>
        <button className="btn btn-danger" onClick={resetTimer}>Reiniciar</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
