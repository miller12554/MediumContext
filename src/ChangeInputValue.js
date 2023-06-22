import React, { useContext } from "react";
import AppContext from "./AppContext";

const ChangeInputValue = props => {
  const { value, setValue } = useContext(AppContext);

  const updateValue = () => {
    // Get current value
    const newValue = document.querySelector(".newValue").value;
    // Update context
    setValue(newValue);
    // Clear input field
    document.querySelector(".newValue").value = "";
  };

  return (
    <>
      <h2>Change Value</h2>
      <input className="newValue" placeholder="enter new value..." />
      <button onClick={updateValue}>set value</button>
      <p>value = "{value}"</p>
    </>
  );
};

export default ChangeInputValue;
