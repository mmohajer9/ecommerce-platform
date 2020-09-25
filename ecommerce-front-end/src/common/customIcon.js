import { Icon, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
}));

const CustomIcon = ({ importedSvgIcon }) => {
  const classes = useStyles();
  return (
    <Icon classes={{ root: classes.iconRoot }}>
      <img
        alt="cart-icon"
        className={classes.imageIcon}
        src={importedSvgIcon}
      />
    </Icon>
  );
};

export default CustomIcon;
