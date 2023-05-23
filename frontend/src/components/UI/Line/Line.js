import classes from "./Line.module.css";

const Line = (props) => {
  return (
    <div
      className={props.vertical ? classes.vertical : classes.horizontal}
    ></div>
  );
};

export default Line;
