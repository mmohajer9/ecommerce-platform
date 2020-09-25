import React from "react";
import {
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.HeaderBgColor,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    textAlign: "center",
  },
}));

const Categories = () => {
  const classes = useStyles();
  const categories = [
    "Cloth",
    "Food",
    "Utilities",
    "Travel",
    "Food",
    "Utilities",
    "Travel",
    "Food",
    "Food",
    "Utilities",
    "Travel",
    "Food",
    "Food",
    "Utilities",
    "Travel",
    "Food",
    "Utilities",
    "Travel",
  ];

  return (
    <>
      <Divider />
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        className={classes.root}
      >
        {categories.map((item, index, array) => (
          <Grid key={index} item>
            <IconButton aria-label="chats" color="inherit">
              <Typography variant="h6">{item}</Typography>
            </IconButton>
          </Grid>
        ))}
      </Grid>
      <Divider />
    </>
  );
};

export default Categories;
