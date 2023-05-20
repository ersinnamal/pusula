import { useEffect, useState } from "react";
import classes from "./Aday.module.css";

const Aday = (props) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const { image } = props.data;

  useEffect(() => {
    setTimeout(() => {
      setIsBlurred(false);
    }, 1000);
    setIsBlurred(true);
  }, [image]);

  const handleEvet = () => {
    props.handleSelect();
  };

  return (
    <div className={`${classes.container} ${isBlurred ? classes.blurred : ""}`}>
      <div className={classes.imgContainer}>
        <div
          style={{
            height: `${(props.vote !== null ? 1 - props.vote : 0) * 100}%`,
            overflow: props.vote === null ? "hidden" : "visible",
          }}
          className={classes.votePercentage}
        >
          <span>{`%${Math.trunc(props.vote * 100)}`}</span>
        </div>

        <img
          src={props.data.image}
          alt={
            props.data.image
              ? `${props.data.firstName} ${props.data.lastName} resim`
              : null
          }
        />
      </div>
      <div className={classes.nameContainer}>
        <p>{props.data.firstName || "AD"}</p>
        <p>{props.data.lastName || "SOYAD"}</p>
      </div>
      <div className={classes.evetContainer}>
        <button
          disabled={props.disabled}
          onClick={handleEvet}
          className={`${classes.evet} ${
            props.selected ? classes.evetSelected : classes.evetNotSelected
          }`}
        >
          <span className={classes.evetStamp}>EVET</span>
        </button>
      </div>
    </div>
  );
};

export default Aday;
