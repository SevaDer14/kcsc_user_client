import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid, Container } from "@material-ui/core";
import CaseStudies from "../modules/CaseStudies";
import CaseStudyArticle from "../components/CaseStudies/CaseStudyArticle";

const NewsView = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      let response = await CaseStudies.index();
      setCaseStudies(response);
    };

    fetchPageData();
    return () => {
      setCaseStudies([]);
    };
  }, []);

  const caseStudyList = caseStudies.map((caseStudy, index) => {
    return (
      <Grid
        item
        key={caseStudy.id}
        style={{
          padding: "50px 7% 50px 7%",
          borderBottom: "1px solid #bbb6",
        }}
      >
        <CaseStudyArticle index={index} caseStudy={caseStudy} />
      </Grid>
    );
  });

  return (
    <>
      <Helmet>
        <title>Case Studies</title>
      </Helmet>
      <Container maxWidth="xl">
        {caseStudies.length > 0 && (
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
