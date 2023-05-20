import { useCallback, useEffect, useState } from "react";
import Aday from "../Aday/Aday";
import Timer from "../Timer/Timer";
import classes from "./Pusula.module.css";

const Pusula = () => {
  const [selected, setSelected] = useState();
  const [isActive, setIsActive] = useState(true);
  const [status, setStatus] = useState();
  const [adays, setAdays] = useState();
  const [data, setData] = useState(false);

  const resetPusula = useCallback(() => {
    setSelected(null);
    setIsActive(false);
  }, []);

  useEffect(() => {
    if (isActive) return setAdays(data.adays);
    if (status === "results") return;

    const fetchPusula = async () => {
      const r = await fetch("/pusula");
      const body = await r.json();
      setData(body);
      setAdays(body.prev.adays);
      setStatus("results");
      console.log(data);
      setTimeout(
        () => {
          setIsActive(true);
          setStatus("active");
        },
        data ? 3000 : 0
      );
    };
    fetchPusula();
  }, [isActive, data, status]);

  const handleTimeout = useCallback(() => {
    resetPusula();
  }, [resetPusula]);

  useEffect(() => {
    const sendVote = async () => {
      await fetch("/pusula", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vote: selected }),
      });
    };
    if (selected !== null) sendVote();
  }, [selected]);

  return (
    <div className={classes.container}>
      <Timer
        status={isActive ? "start" : "pause"}
        target={isActive ? Math.ceil(data.remainingTime / 1000) : 0}
        onTimeout={handleTimeout}
      />
      <div className={classes.pusula}>
        {[0, 1].map((i) => (
          <Aday
            key={i}
            vote={!isActive ? data.prev?.votes[i] : null}
            selected={selected === i}
            disabled={selected !== null}
            data={data && adays[i]}
            handleSelect={setSelected.bind(null, i)}
          ></Aday>
        ))}
      </div>
    </div>
  );
};

export default Pusula;
