import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import Icon from "@material-ui/core/Icon";
import SearchBar from "./SearchBar";
import { Divider, Grid } from "@material-ui/core";

import * as HomepageIcon from "./Icons";
import CustomIcon from "../../common/customIcon";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.HeaderBgColor,
    paddingBottom: theme.spacing(2),
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
  iconButtonStyle : {
    
  }
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
              <HomepageIcon.MenuIcon />
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
              <IconButton className={classes.iconButtonStyle} aria-label="cart" color="inherit">
                <HomepageIcon.ShoppingBasketIcon fontSize="large" />
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
                <HomepageIcon.ChatIcon fontSize="large" />
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
                <HomepageIcon.NotificationsIcon fontSize="large" />
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
                <HomepageIcon.AccountCircleIcon fontSize="large" />
              </IconButton>
              <Typography variant="subtitle2">Profile</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
