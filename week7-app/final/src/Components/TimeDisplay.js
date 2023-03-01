import React, { useContext } from "react";
import "./TimeDisplay.css";
import ThemeContext from "../Contexts/ThemeContext"

function TimeDisplay(props) {
  const [theme,] = useContext(ThemeContext)
  return (
    <>
      <p className={`clock-display ${theme}`}>
        {("0" + Math.floor(props.time / 60)).slice(-2) + ":"}
      </p>
      <p className={`clock-display ${theme}`}>{("0" + (props.time % 60)).slice(-2)}</p>
    </>
  );
}

export default TimeDisplay;
