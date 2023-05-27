import { useCallback, useState } from "react";
import Aday from "../Aday/Aday";
import AdayForm from "../AdayForm/AdayForm";
import Container from "../UI/Container/Container";
import classes from "./AdayEkle.module.css";
import Line from "../UI/Line/Line";
import AdayList from "../AdayList/AdayList";

const AdayEkle = () => {
  const [aday, setAday] = useState({});

  const handleChange = useCallback((data) => {
    setAday(data);
  }, []);

  return (
    <>
      <Container>
        <div className={classes.container}>
          <Aday data={aday} vote={null} selected={true} disabled={true} />
          <Line vertical={true} />
          <AdayForm handleChange={handleChange} />
        </div>
      </Container>
      <AdayList />
    </>
  );
};

export default AdayEkle;
