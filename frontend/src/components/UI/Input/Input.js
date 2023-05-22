import { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classes.inputContainer}>
      <label
        onClick={() => {
          setIsFocused(true);
        }}
        className={`${classes.label} ${
          isFocused || props.value ? classes.labelFocused : ""
        }`}
      >
        {props.label}
      </label>
      <input
        onClick={() => {
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        onChange={props.onChange}
        value={props.value}
        className={classes.input}
      />
    </div>
  );
};

export default Input;
