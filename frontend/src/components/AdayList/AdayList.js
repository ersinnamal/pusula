import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import AdayCompact from "../AdayCompact/AdayCompact";
import Container from "../UI/Container/Container";
import classes from "./AdayList.module.css";

const host =
  process.env.NODE_ENV === "development" ? "http://localhost:8000" : "";

const AdayList = () => {
  const { value, onChange } = useInput();
  const [adays, setAdays] = useState([]);
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    const getAdays = async () => {
      const r = await fetch(host + "/aday");
      const data = await r.json();
      setAdays(data);
    };
    getAdays();
  }, []);

  useEffect(() => {
    setShowList(
      adays.filter((aday) =>
        aday.firstName
          .concat(" ", aday.lastName)
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );
  }, [value, adays]);

  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.searchContainer}>
          <input
            placeholder="ara"
            className={classes.search}
            value={value}
            onChange={onChange}
          />
        </div>
        <ul className={classes.adayList}>
          {showList.slice(0, 5).map((data) => (
            <AdayCompact data={data} />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default AdayList;
