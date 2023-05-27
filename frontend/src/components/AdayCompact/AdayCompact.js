import classes from "./AdayCompact.module.css";

const AdayCompact = (props) => {
  return (
    <li className={classes.container}>
      <div className={classes.adayImgContainer}>
        <img className={classes.adayImg} src={props.data.image} alt="" />
      </div>
      <div className={classes.textContainer}>
        <p>{props.data.firstName}</p>
        <p>{props.data.lastName}</p>
      </div>
    </li>
  );
};

export default AdayCompact;
