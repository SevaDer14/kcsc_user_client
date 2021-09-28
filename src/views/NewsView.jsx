import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Container } from "@material-ui/core";
import Articles from "../modules/Articles";
import Article from "../components/Articles/Article";
import { cleanup } from "@testing-library/react";

const NewsView = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      let response = await Articles.index();
      setArticles(response);
    };
    return cleanup(() => {
      fetchPageData();
    });
  }, []);

  const articlesList = articles.map((article, index) => {
    return (
      <Grid item key={article.id}>
        <Article index={index} article={article} />
      </Grid>
    );
  });

  return (
    <>
      <Helmet>
        <title>News</title>
      </Helmet>
      <Container maxWidth="lg">
        {articles.length > 0 && (
          <Grid container spacing={0} direction="column" alignItems="stretch">
            {articlesList}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default NewsView;
