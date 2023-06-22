import React, { useContext } from "react";
import AppContext from "./AppContext";
import ChildComponentTwo from "./ChildComponentTwo";

const ChildComponentOne = props => {
  const { theme } = useContext(AppContext);

  return (
    <div>
      <p style={theme}>Child Component One</p>
      <ChildComponentTwo />
    </div>
  );
};

export default ChildComponentOne;
