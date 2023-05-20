import { useEffect } from "react";
import useInput from "../../hooks/useInput";
import Input from "../UI/Input/Input";
import classes from "./AdayForm.module.css";

const AdayForm = (props) => {
  const imgInputHook = useInput();
  const fNameInputHook = useInput();
  const lNameInputHook = useInput();

  const { value: imgValue } = imgInputHook;
  const { value: fNameValue } = fNameInputHook;
  const { value: lNameValue } = lNameInputHook;

  const { handleChange } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      firstName: fNameValue,
      lastName: lNameValue,
      image: imgValue,
    };
    await fetch("/aday", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    handleChange({
      image: imgValue,
      firstName: fNameValue,
      lastName: lNameValue,
    });
  }, [imgValue, fNameValue, lNameValue, handleChange]);
  return (
    <form onSubmit={handleSubmit} className={classes.adayForm}>
      <Input label="Resim" {...imgInputHook} />
      <Input label="Ad" {...fNameInputHook} />
      <Input label="Soyad" {...lNameInputHook} />
      <button>Gönder</button>
    </form>
  );
};

export default AdayForm;
