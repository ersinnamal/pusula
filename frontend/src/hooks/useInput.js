import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const clear = () => {
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange, clear };
};

export default useInput;
