import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import loadable from "@loadable/component";
import { darkTheme, theme } from "../../common/theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*  Link */
} from "react-router-dom";

//? Components Are Dynamically Added
const Homepage = loadable(() => import("../../layouts/Homepage/Homepage"));

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
