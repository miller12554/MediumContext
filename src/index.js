import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppContext from "./AppContext";
import { themes } from "./context/defaults";

import "./styles.css";

function Root() {
  const appContext = useContext(AppContext);
  const [context, setContext] = useState(appContext);
  const [isDarkMode, setDarkMode] = useState(false);

  // TODO: can we specify this updater function elsewhere?
  const toggleTheme = () => {
    setContext({ ...context, theme: isDarkMode ? themes.light : themes.dark });
    setDarkMode(!isDarkMode);
  };

  const setValue = value => {
    setContext({ ...context, value });
  };

  // Specify context value (copy defaults and override toggleTheme func)
  const state = {
    ...context,
    toggleTheme: toggleTheme,
    setValue: setValue
  };

  return (
    <AppContext.Provider value={state}>
      <App />
    </AppContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
