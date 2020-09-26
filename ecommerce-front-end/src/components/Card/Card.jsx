import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    margin: "auto",
  },
  media: {
    height: 300,
  },
  iconButtonStyle: {
    borderRadius: 0,
  },
  iconStyle: {
    marginRight: 10,
  },
  buttonStyle: {
    padding: 10,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://placeimg.com/640/480/tech"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gadget
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          className={classes.buttonStyle}
        >
          <AddShoppingCartIcon className={classes.iconStyle} color="inherit" />
          <Typography variant="button" color="inherit">
            Add To Cart
          </Typography>
        </Button>

        <Button
          size="small"
          color="primary"
          variant="contained"
          className={classes.buttonStyle}
        >
          <Typography variant="button" color="textPrimary">
            More Information
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
