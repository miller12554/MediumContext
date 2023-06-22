// This file holds the initial, default values for context
// Note: it's good practice to specify defaults here,
//  but in our case they are overwritten by the values
//  within AppContextProvider

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    color: "black"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    color: "white"
  }
};

const testValue = "some other value";

const defaultContext = {
  theme: themes.light,
  toggleTheme: () => {},
  value: testValue,
  setValue: () => {}
};

export default defaultContext;
