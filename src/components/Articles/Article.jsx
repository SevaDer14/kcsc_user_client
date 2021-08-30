import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Grid, Button } from "@material-ui/core";

const Article = ({ index, article }) => {
  let { title, teaser, image, id } = article;
  return (
    <Grid
      style={
        index !== 0
          ? styles.article
          : { ...styles.article, backgroundImage: `url(${image.url})` }
      }
      container
      alignItems="center"
      direction="row"
      data-cy="article"
    >
      {index !== 0 && (
        <Grid item xs={12} lg={6} data-cy="image" style={styles.itemContainer}>
          <img style={styles.image} src={image.url} alt={image.alt} />
        </Grid>
      )}

      <Grid
        item
        xs={12}
        lg={6}
        style={
          index !== 0
            ? styles.itemContainer
            : { ...styles.itemContainer, backgroundColor: "#0008" }
        }
      >
        <Typography
          data-cy="title"
          variant="h3"
          component="h3"
          style={index !== 0 ? { color: "#000" } : { color: "#fff" }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          data-cy="teaser"
          variant="body1"
          component="p"
          style={index !== 0 ? { color: "#000" } : { color: "#fff" }}
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
  article: {
    height: "650px",
    backgroundSize: "cover",
  },
  itemContainer: {
    padding: "5%",
  },
  image: {
    width: "100%",
    maxHeight: "400px",
    borderRadius: "10px",
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
