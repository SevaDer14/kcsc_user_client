import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Container } from "@material-ui/core";
import Articles from "../modules/Articles";
import Article from "../components/Articles/Article";

const NewsView = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      let response = await Articles.index();
      setArticles(response);
    };

    fetchPageData();
    return () => {
      setArticles([]);
    };
  }, []);

  const caseStudyList = articles.map((article, index) => {
    if (article.case_study === true) {
      return (
        <Grid
          item
          key={article.id}
          style={{
            padding: "50px 7% 50px 7%",
            borderBottom: "1px solid #bbb6",
          }}
        >
          <Article index={index} article={article} />
        </Grid>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      <Helmet>
        <title>Case Studies</title>
      </Helmet>
      <Container maxWidth="xl">
        {articles.length > 0 && (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="stretch"
            style={{ marginTop: "125px" }}
          >
            {caseStudyList}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default NewsView;
