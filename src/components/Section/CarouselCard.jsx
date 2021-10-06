import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from "@material-ui/icons/Language";
import cardTheme from "../../theme/cardTheme"


const CarouselCard = ({ card }) => {
  const classes = cardTheme()
  return (
    <Card
      data-cy="partner-card"
      elevation={0}
      variant="outlined"
      className={classes.card}
    >
      <Box className={classes.logoContainer}>
        <CardMedia
          data-cy="partner-logo"
          component="img"
          className={classes.logo}
          alt={card.alt}
          image={card.logo}
          title={card.organization}
        />
      </Box>

      <CardContent>
        <Typography
          data-cy="organization"
          gutterBottom
          variant="h5"
          component="h2"
        >
          {card.organization}
        </Typography>
        <Typography
          data-cy="description"
          variant="body1"
          color="textSecondary"
          component="p"
        >
          {card.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        {card.web && (
          <Button
            data-cy="link"
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => window.open(card.web)}
          >
            <LanguageIcon />
          </Button>
        )}
        {card.facebook && (
          <Button
            data-cy="link"
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => window.open(card.facebook)}
          >
            <FacebookIcon />
          </Button>
        )}
        {card.twitter && (
          <Button
            data-cy="link"
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => window.open(card.twitter)}
          >
            <TwitterIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CarouselCard;
