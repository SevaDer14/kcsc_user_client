import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid } from "@material-ui/core";
import Articles from "../modules/Articles";
import Article from "../components/Articles/Article"

const NewsView = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      let response = await Articles.index();
      setArticles(response);
    };
    fetchPageData();
  }, []);

  const articlesList = articles.map((article) => {
    return (
      <Grid item key={article.id}>
        <Article />
      </Grid>
    );
  });

  return (
    <>
      <Helmet>
        <title>News</title>
      </Helmet>
      <Grid container spacing={0} direction="column" alignItems="stretch">
        {articlesList}
      </Grid>
    </>
  );
};

export default NewsView;
