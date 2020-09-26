import React from "react";
import Flickity from "react-flickity-component";
import Card from "../Card/Card";
import Slider from "react-slick";

import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Container, Typography } from "@material-ui/core";

class ImageCarousel extends React.Component {
  state = {
    options: {
      initialIndex: 1,
      wrapAround: true,
      autoPlay: true,
      imagesLoaded: true,
      pageDots: false,
    },
  };

  render() {
    const { items } = this.props;
    return (
      <Flickity options={this.state.options} reloadOnUpdate>
        {items.map((item, index) => {
          return <img alt="alt-pic" key={index} src={item} />;
        })}
      </Flickity>
    );
  }
}

const CardCarousel = (props) => {
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const { items , background } = props;
  const sliderStyle = {
    width: "90%",
    margin: "0 auto",
  };
  const containerStyle = {
    background: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "2em 0 4em 0",
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: matchesLG ? 3 : matchesMD ? 2 : 1,
    slidesToScroll: matchesLG ? 3 : matchesMD ? 2 : 1,

    // centerMode: true
    // fade: true,
  };
  return (
    <Container maxWidth="xl" style={containerStyle}>
      <Typography style={{ margin: "1rem 0 2rem 2rem"  , color : "white"}} variant="h3">
        Best Offers
      </Typography>
      <Slider {...settings} style={sliderStyle}>
        {items.map((item, index) => {
          return <Card key={index} />;
        })}
      </Slider>
    </Container>
  );
};
export { ImageCarousel, CardCarousel };
