import "./Controller.css";
import TimeDisplay from "./TimeDisplay";
import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext"

function Controller() {
  const INITIAL_TIME = 60;
  const [time, setTime] = useState(INITIAL_TIME);
  const [reset, setReset] = useState(false);
  const [pause, setPause] = useState(true);
  const [theme,] = useContext(ThemeContext)

  const pauseHandler = () => {
    setPause(prevPause => !prevPause);
  };

  const resetHandler = () => {
    setReset(prevReset => !prevReset);
  };

  useEffect(() => {
    let interval = null;
    if (!pause && !reset) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
      }, 1000);
    } else if (reset) {
      setTime(INITIAL_TIME);
      setReset(false);
      setPause(true);
    }
    return () => {
      clearInterval(interval);
    };
  }, [reset, pause]);

  return (
    <>
      <div className={`time-container ${theme} ${time === 0 ? "finished" : ""}`}>
        <TimeDisplay time={time}></TimeDisplay>
      </div>
      <div className="button-container">
        <button className="control-button" onClick={resetHandler}>
          Reset
        </button>
        {time !== 0 && (
          <button className="control-button" onClick={pauseHandler}>
            {pause ? "Start" : "Pause"}
          </button>
        )}
      </div>
    </>
  );
}

export default Controller;
