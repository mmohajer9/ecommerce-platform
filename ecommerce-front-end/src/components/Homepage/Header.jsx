import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import SearchBar from "./SearchBar";
import { Divider, Grid } from "@material-ui/core";

import ProfileIcon from "./assets/SVG/user.svg";
import NotificationsIcon from "./assets/SVG/notification.svg";
import ChatsIcon from "./assets/SVG/chat (1).svg";
import CartIcon from "./assets/SVG/shopping-basket.svg";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.HeaderBgColor,
    paddingBottom: theme.spacing(2)
  },
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  gridItem: {
    textAlign: "center",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit" className={classes.root}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3} sm={4} md={12}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item container xs={5} sm={4} md={2} justify="center">
            <Grid item>
              <Typography variant="h6">Brand Name</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={4} md>
            <SearchBar />
          </Grid>

          {/* <Grid item xs={12} md={2} /> */}
          <Grid item container spacing={1} md={5} lg={4} justify="space-evenly">
            <Grid
              item
              container
              direction="column"
              xs={2}
              md={1}
              className={classes.gridItem}
            >
              <IconButton aria-label="cart" color="inherit">
                <Icon classes={{ root: classes.iconRoot }}>
                  <img
                    alt="cart-icon"
                    className={classes.imageIcon}
                    src={CartIcon}
                  />
                </Icon>
              </IconButton>
              <Typography variant="subtitle2">Cart</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              item
              xs={3}
              md={1}
              container
              direction="column"
              className={classes.gridItem}
            >
              <IconButton aria-label="chats" color="inherit">
                <Icon classes={{ root: classes.iconRoot }}>
                  <img
                    alt="chats-icon"
                    className={classes.imageIcon}
                    src={ChatsIcon}
                  />
                </Icon>{" "}
              </IconButton>
              <Typography variant="subtitle2">Chats</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              item
              xs={3}
              md={1}
              container
              direction="column"
              className={classes.gridItem}
            >
              <IconButton aria-label="notifications" color="inherit">
                <Icon classes={{ root: classes.iconRoot }}>
                  <img
                    alt="notifications-icon"
                    className={classes.imageIcon}
                    src={NotificationsIcon}
                  />
                </Icon>{" "}
              </IconButton>
              <Typography variant="subtitle2">Mails</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              item
              xs={2}
              md={1}
              container
              direction="column"
              className={classes.gridItem}
            >
              <IconButton aria-label="profile" color="inherit">
                <Icon classes={{ root: classes.iconRoot }}>
                  <img
                    alt="profile-icon"
                    className={classes.imageIcon}
                    src={ProfileIcon}
                  />
                </Icon>
              </IconButton>
              <Typography variant="subtitle2">Profile</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
