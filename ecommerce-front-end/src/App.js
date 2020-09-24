import { ThemeProvider } from "@material-ui/core";
import React from "react";

import "./App.css";
import { darkTheme, theme } from "./common/theme";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>

    </ThemeProvider>
  )
};

export default App;
