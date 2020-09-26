import React from "react";
import { connect } from "react-redux";
import { Container, Grid } from "@material-ui/core";
import Header from "../../components/Homepage/Header";
import Categories from "../../components/Homepage/Categories";
// import Card from "../../components/Card/Card";
import {
  CardCarousel,
  ImageCarousel,
} from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";

// const useStyles = makeStyles((theme) => ({

// }));

const Homepage = (props) => {
  // const classes = useStyles();
  const items = [
    "https://placeimg.com/640/480/animals",
    "https://placeimg.com/640/480/nature",
    "https://placeimg.com/640/480/architecture",
    "https://placeimg.com/640/480/animals",
    "https://placeimg.com/640/480/nature",
    "https://placeimg.com/640/480/architecture",
  ];

  return (
    <Grid container spacing={0} direction="column">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Categories />
      </Grid>
      <Grid item xs={12}>
        <ImageCarousel items={items} />
      </Grid>
      <Grid item xs={12}>
        <CardCarousel items={items} />
      </Grid>
      <Grid item xs={12}>
        <Footer />
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
