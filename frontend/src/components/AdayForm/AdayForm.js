import { useEffect, useState, useCallback } from "react";
import useInput from "../../hooks/useInput";
import Input from "../UI/Input/Input";
import classes from "./AdayForm.module.css";

const AdayForm = (props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("ADAY EKLE");

  const imgInputHook = useInput();
  const fNameInputHook = useInput();
  const lNameInputHook = useInput();

  const { value: imgValue } = imgInputHook;
  const { value: fNameValue } = fNameInputHook;
  const { value: lNameValue } = lNameInputHook;

  const host =
    process.env.NODE_ENV === "development" ? "http://localhost:8000" : "";

  const { handleChange } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    setButtonText("ADAY EKLENİYOR...");
    const payload = {
      firstName: fNameValue,
      lastName: lNameValue,
      image: imgValue,
    };
    const r = await fetch(host + "/aday", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setButtonText("ADAY EKLENDİ");
    setTimeout(() => {
      setIsButtonDisabled(false);
      imgInputHook.clear();
      fNameInputHook.clear();
      lNameInputHook.clear();
      setButtonText("ADAY EKLE");
    }, 1500);
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
      <Input label="Resim (url)" {...imgInputHook} />
      <Input label="Ad" {...fNameInputHook} />
      <Input label="Soyad" {...lNameInputHook} />
      <button disabled={isButtonDisabled} className={classes.submitButton}>
        {buttonText}
      </button>
    </form>
  );
};

export default AdayForm;
