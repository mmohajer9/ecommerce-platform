import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export { theme, darkTheme };
