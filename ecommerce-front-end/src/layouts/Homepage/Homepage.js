import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Header from "../../components/Homepage/Header";
import Categories from "../../components/Homepage/Categories";
const Homepage = (props) => {
  return (
    <Grid container spacing={0} direction="column">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Categories />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    homepageState: state,
  };
};

export default connect(mapStateToProps)(Homepage);
