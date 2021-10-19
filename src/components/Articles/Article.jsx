import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Grid,
  Button,
  useMediaQuery,
} from "@material-ui/core";

const Article = ({ article }) => {
  let { title, teaser, image, id } = article;
  let alt = image?.alt;
  let mobile = useMediaQuery("(max-width:1279px)");

  return (
    <Grid
      style={mobile ? { height: "auto" } : { height: "300px" }}
      container
      alignItems="center"
      direction="row"
      data-cy="article"
    >
      <Grid item xs={12} lg={6} data-cy="image" style={styles.itemContainer}>
        <img style={styles.image} src={image?.url} alt={alt} />
      </Grid>
      <Grid item xs={12} lg={6} style={styles.itemContainer}>
        <Typography
          data-cy="title"
          variant="h3"
          component="h3"
          style={{ color: "#000" }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          data-cy="teaser"
          variant="body1"
          component="p"
          style={{ color: "#000" }}
          gutterBottom
        >
          {teaser}
        </Typography>
        <Box style={styles.buttonContainer}>
          <Button
            data-cy="read-more-button"
            variant="contained"
            color="secondary"
            component={Link}
            to={`/news_info/news/articles/${id}`}
            style={styles.button}
          >
            <Typography variant="button" style={styles.buttonText}>
              Read more
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Article;

const styles = {
  itemContainer: {
    padding: "0 5%",
  },
  image: {
    width: "100%",
    maxHeight: "300px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    marginRight: "10px",
  },
  buttonText: {
    marginBottom: "-5px",
  },
};
