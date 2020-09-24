import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Header from "../../components/Homepage/Header";
const Homepage = (props) => {
  return (
    <Grid container spacing={0} direction="column">
      <Grid item xs={12}>
        <Header></Header>
      </Grid>
      <Grid item>REST</Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    homepageState: state,
  };
};

export default connect(mapStateToProps)(Homepage);
