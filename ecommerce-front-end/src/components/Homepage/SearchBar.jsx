/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core";

import SearchIcon from "./assets/SVG/search_icon.svg";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    borderRadius: 25,
  },
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Autocomplete
      freeSolo
      id="free-solo"
      disableClearable
      options={[].map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          margin="normal"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            type: "search",
            className: classes.inputStyle,
            startAdornment: (
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  alt="search-icon"
                  className={classes.imageIcon}
                  src={SearchIcon}
                />
              </Icon>
            ),
          }}
          inputProps={{style : {
              paddingLeft : 20
          }}}
        />
      )}
    />
  );
}
