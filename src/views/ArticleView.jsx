import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Articles from "../modules/Articles";
import {
  Container,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";

const ArticleView = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const {title, author, date, image, body} = article
  
  useEffect(() => {
    const fetchPageData = async () => {
      let response = await Articles.show(id);
      setArticle(response);
    };
    fetchPageData();
  }, [id]);

  return (
    <Container data-cy="article" maxWidth="md">
      {image ? (
        <>
          <Typography component="h3" variant="h3" data-cy="title">
            {title}
          </Typography>
          <Grid container>
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
          <Divider orientation="vertical" variant="middle" />
          <img
            data-cy="image"
            src={image.url}
            alt={image.alt}
            style={styles.image}
          />
          <Typography component="p" variant="body1" data-cy="body">
            {body}
          </Typography>
        </>
      ) : <p>No article here</p>}
    </Container>
  );
};

export default ArticleView;

const styles = {
  image: {
    width: "100%",
    margin: "50px 0",
    height: 500,
    objectFit: "cover",
  },
};
