import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Header from "../../components/Homepage/Header";
import Categories from "../../components/Homepage/Categories";
import firstBg from "./assets/specialOffer.png";
import secondBg from "./assets/specialOffer2.jpeg";

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
    "https://placeimg.com/640/480/animals",
    "https://placeimg.com/640/480/nature",
    "https://placeimg.com/640/480/architecture",
    "https://placeimg.com/640/480/animals",
    "https://placeimg.com/640/480/nature",
    "https://placeimg.com/640/480/architecture",
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
        <CardCarousel
          background={firstBg}
          items={items}
          title={"Best Offers"}
        />
      </Grid>
      <Grid item xs={12}>
        <CardCarousel
          background={secondBg}
          items={items}
          title={"Best Offers"}
        />
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
