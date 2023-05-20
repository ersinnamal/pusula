import { useEffect } from "react";
import classes from "./Timer.module.css";

const Timer = (props) => {
  useEffect(() => {
    if (props.target !== 0) {
      setTimeout(() => {
        props.onTimeout();
      }, props.target * 1000);
    }
  }, [props]);

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
