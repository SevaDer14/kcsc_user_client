import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Articles from "../modules/Articles";
import { Container, Typography, Divider, Grid } from "@material-ui/core";

const ArticleView = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const { title, author, date, image, body } = article;

  useEffect(() => {
    const fetchPageData = async () => {
      let response = await Articles.show(id);
      setArticle(response);
    };
    fetchPageData();
  }, [id]);

  return (
    <Container style={styles.container} data-cy="article" maxWidth="md">
      {image ? (
        <>
          <Typography component="h3" variant="h3" data-cy="title">
            {title}
          </Typography>
          <Grid container justify="space-between" style={styles.information}>
            <Grid item>
              <Typography
                component="p"
                variant="subtitle1"
                data-cy="author"
              >{`Written by: ${author}`}</Typography>
            </Grid>
            <Grid item>
              <Typography component="p" variant="subtitle1" data-cy="date">
                {date}
              </Typography>
            </Grid>
          </Grid>
          <Divider
            style={styles.divider}
            orientation="horizontal"
            variant="fullWidth"
          />
          <img
            data-cy="image"
            src={image.url}
            alt={image.alt}
            style={styles.image}
          />
          <Typography
            component="p"
            variant="body1"
            data-cy="body"
            style={styles.body}
          >
            {body}
          </Typography>
        </>
      ) : (
        <p>No article here</p>
      )}
    </Container>
  );
};

export default ArticleView;

const styles = {
  container: {
    marginTop: "124px",
  },
  information: {
    marginTop: "12px",
  },
  image: {
    width: "100%",
    margin: "12px 0",
    maxHeight: "500px",
    minHeight: '200px',
    objectFit: "cover",
  },
  divider: {
    marginBottom: "12px",
  },
  body: {
    whiteSpace: "pre-wrap",
  },
};
