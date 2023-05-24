import { useCallback, useEffect, useState } from "react";
import Aday from "../Aday/Aday";
import Container from "../UI/Container/Container";
import Timer from "../Timer/Timer";
import classes from "./Pusula.module.css";
import Line from "../UI/Line/Line";

const host =
  process.env.NODE_ENV === "development" ? "http://localhost:8000" : "";

const Pusula = () => {
  const [selected, setSelected] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [status, setStatus] = useState();
  const [adays, setAdays] = useState();
  const [data, setData] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const resetPusula = useCallback(() => {
    setSelected(null);
    setIsActive(false);
  }, []);

  useEffect(() => {
    if (isActive && data) return setAdays(data.adays);
    if (status === "results") return;

    const fetchPusula = async () => {
      const r = await fetch(host + "/pusula");
      const body = await r.json();
      setData(body);

      if (isFirstTime) {
        setStatus("active");
        setIsActive(true);
        setAdays(body.adays);
        setIsFirstTime(false);
        return;
      }

      setAdays(body.prev.adays);
      setStatus("results");
      setTimeout(
        () => {
          setIsActive(true);
          setStatus("active");
        },
        data ? 3000 : 0
      );
    };
    fetchPusula();
  }, [isActive, data, status, isFirstTime]);

  const handleTimeout = useCallback(() => {
    resetPusula();
  }, [resetPusula]);

  useEffect(() => {
    const sendVote = async () => {
      await fetch(host + "/pusula", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vote: selected }),
      });
    };
    if (selected !== null) sendVote();
  }, [selected]);

  return (
    <Container>
      <Timer
        status={isActive && data ? "start" : "pause"}
        target={isActive && data ? Math.ceil(data.remainingTime / 1000) : 0}
        onTimeout={handleTimeout}
      />
      <div className={classes.pusula}>
        {[0, 1].map((i) => (
          <>
            <Aday
              key={i}
              vote={!isActive && data.prev ? data.prev.votes[i] : null}
              selected={selected === i}
              disabled={selected !== null}
              data={data && adays[i]}
              handleSelect={setSelected.bind(null, i)}
            ></Aday>
            {i === 0 && <Line vertical={true} />}
          </>
        ))}
      </div>
    </Container>
  );
};

export default Pusula;
