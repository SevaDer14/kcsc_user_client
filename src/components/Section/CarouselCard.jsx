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

const CarouselCard = ({ card }) => {
  return (
    <Card
      data-cy="partner-card"
      elevation={0}
      variant="outlined"
      style={styles.card}
    >
      <Box style={styles.logoContainer}>
        <CardMedia
          data-cy="partner-logo"
          component="img"
          style={styles.logo}
          alt={card.alt}
          image={card.logo}
          title={card.organization}
        />
      </Box>

      <CardContent>
        <Typography
          data-cy="organization"
          gutterBottom
          variant="h4"
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
      <CardActions style={styles.buttonContainer}>
        {card.links.web && (
          <Button
            data-cy="link"
            size="large"
            variant="contained"
            color="secondary"
            onClick={()=> window.open(card.links.web)}
          >
            <LanguageIcon />
          </Button>
        )}
        {card.links.facebook && (
          <Button
            data-cy="link"
            size="large"
            variant="contained"
            color="secondary"
            href={()=>window.open(card.links.facebook)}
          >
            <FacebookIcon />
          </Button>
        )}
        {card.links.twitter && (
          <Button
            data-cy="link"
            size="large"
            variant="contained"
            color="secondary"
            href={()=>window.open(card.links.twitter)}
          >
            <TwitterIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CarouselCard;

const styles = {
  card: {
    height: "500px",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    height: "40%",
  },
  buttonContainer: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: "20px",
  },
  logo: {
    margin: "auto",
    maxHeight: "90%",
    maxWidth: "90%",
    objectFit: "contain",
  },
};
