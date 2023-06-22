import React, { useContext } from "react";
import AppContext from "./AppContext";
import ChildComponentOne from "./ChildComponentOne";
import ChangeInputValue from "./ChangeInputValue";

const App = props => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className="App">
      <h1>useContext</h1>
      <div className="flex-container">
        <div className="container" style={{ ...theme }}>
          hello
        </div>
        <ChildComponentOne />
        <div className="container" style={{ ...theme }}>
          world
        </div>
      </div>
      <h2>Dark Mode</h2>
      <button onClick={toggleTheme}>toggle dark mode</button>
      <ChangeInputValue />
    </div>
  );
};

export default App;
