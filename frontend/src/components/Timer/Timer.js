import { useEffect, useState } from "react";
import classes from "./Timer.module.css";

const Timer = (props) => {
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    if (props.target !== 0 && !isTimerActive) {
      setIsTimerActive(true);
      setTimeout(() => {
        props.onTimeout();
        setIsTimerActive(false);
      }, props.target * 1000);
    }
  }, [props, isTimerActive]);

  let style;

  if (props.status === "start") {
    style = {
      animation: `${classes.fillAnimation} ${props.target}s`,
    };
  } else if (props.status === "pause") {
    style = { animationPlayState: "paused" };
  }

  return (
    <div className={classes.timerContainer}>
      <div style={style} className={classes.timerFill}></div>
    </div>
  );
};

export default Timer;
