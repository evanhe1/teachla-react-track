import { Fragment } from "react";
import "./TimeDisplay.css";

function TimeDisplay(props) {
  return (
    <Fragment>
      <p className="clock-display">
        {("0" + Math.floor(props.time / 60)).slice(-2) + ":"}
      </p>
      <p className="clock-display">{("0" + (props.time % 60)).slice(-2)}</p>
    </Fragment>
  );
}

export default TimeDisplay;
