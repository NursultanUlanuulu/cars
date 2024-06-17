import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");

  const handleOnChange = (value) => {
    setPhone(value);
  };

  return (
    <div>
      <PhoneInput
        country={"kg"} // Задайте страну по умолчанию
        value={phone}
        onChange={handleOnChange}
        inputStyle={{ width: "100%", height: "50px", marginBottom: "10px" }}
      />
    </div>
  );
};

export default PhoneNumberInput;
