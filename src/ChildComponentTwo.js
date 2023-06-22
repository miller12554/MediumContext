import React, { useContext } from "react";
import AppContext from "./AppContext";

const ChildComponentTwo = props => {
  const { theme, toggleTheme, value } = useContext(AppContext);

  return (
    <div>
      <p style={{ ...theme }}>Child Component Two</p>
      <p>value = "{value}"</p>
      <button onClick={toggleTheme}>toggle dark mode (nested)</button>
    </div>
  );
};

export default ChildComponentTwo;
