import React from "react";
import Flickity from "react-flickity-component";
import Card from "../Card/Card";
import CardCarouselBackground from "./assets/cardCarouselBg.png";

import Slider from "react-slick";

import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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

  const { items } = props;
  const sliderStyle = {
    width: "85%",
    margin: "0 auto",
  };
  const containerStyle = {
    background: `url(${CardCarouselBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "10em 0",
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: matchesLG ? 3 : matchesMD ? 2 : 1,
    slidesToScroll: 1,
  };
  return (
    <div style={containerStyle}>
      <Slider {...settings} style={sliderStyle}>
        {items.map((item, index) => {
          return <Card key={index} />;
        })}
      </Slider>
    </div>
  );
};
export { ImageCarousel, CardCarousel };
