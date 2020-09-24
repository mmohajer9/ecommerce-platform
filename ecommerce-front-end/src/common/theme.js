import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    HeaderBgColor: "#F8F8F8",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export { theme, darkTheme };
