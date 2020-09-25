import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.HeaderBgColor,
    padding : "5em 0"
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>Copyright 2020</Grid>
    </Grid>
  );
};

export default Footer;
