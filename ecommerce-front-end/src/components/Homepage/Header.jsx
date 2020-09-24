import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import SearchBar from "./SearchBar";
import { Grid } from "@material-ui/core";

import ProfileIcon from "./assets/SVG/user.svg";
import NotificationsIcon from "./assets/SVG/notification.svg";
import ChatsIcon from "./assets/SVG/chat (1).svg";
import CartIcon from "./assets/SVG/shopping-basket.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.HeaderBgColor,
  },
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit" className={classes.root}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="h6">
              Brand Name
            </Typography>
          </Grid>
          <Grid item xs>
            <SearchBar />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={1}>
            <IconButton aria-label="cart" color="inherit">
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  alt="cart-icon"
                  className={classes.imageIcon}
                  src={CartIcon}
                />
              </Icon>{" "}
            </IconButton>
          </Grid>

          <Grid item xs={1}>
            <IconButton aria-label="chats" color="inherit">
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  alt="chats-icon"
                  className={classes.imageIcon}
                  src={ChatsIcon}
                />
              </Icon>{" "}
            </IconButton>
          </Grid>

          <Grid item xs={1}>
            <IconButton aria-label="notifications" color="inherit">
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  alt="notifications-icon"
                  className={classes.imageIcon}
                  src={NotificationsIcon}
                />
              </Icon>{" "}
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-label="profile" color="inherit">
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  alt="profile-icon"
                  className={classes.imageIcon}
                  src={ProfileIcon}
                />
              </Icon>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
