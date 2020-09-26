import { CssBaseline, ThemeProvider, Paper } from "@material-ui/core";
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
const Homepage = loadable(() => import("../../layouts/Homepage/Homepage"), {
  fallback: <div>Loading...</div>,
});

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = React.useState(true);
  if (!Homepage) {
    console.log("not hompage");
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <>
        <CssBaseline />
        <Paper elevation={0} square>
          <Router>
            <Switch>
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>
          </Router>
        </Paper>
      </>
    </ThemeProvider>
  );
};

export default App;
