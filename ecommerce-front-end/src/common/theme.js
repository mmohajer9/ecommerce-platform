import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    HeaderBgColor: "#F8F8F8",
  },
  typography: {
    fontFamily: "Vazir,Roboto,Helvetica,Arial",
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
  typography: {
    fontFamily: 'Vazir ,Roboto, "Helvetica", "Arial", sans-serif"',
  },
});

export { theme, darkTheme };
