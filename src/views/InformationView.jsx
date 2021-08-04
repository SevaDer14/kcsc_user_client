import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid } from "@material-ui/core";
import Information from "../modules/Information";
import InformationItem from "../components/InformationItem"

const NewsView = () => {
  const [informationItems, setInformationItems] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      let response = await Information.index();
      setInformationItems(response);
    };
    fetchPageData();
  }, []);

  const informationItemsList = informationItems.map((item, index) => {
    return (
      <Grid item key={article.id}>
        <InformationItem index={index} article={article}  />
      </Grid>
    );
  });

  return (
    <>
      <Helmet>
        <title>Information</title>
      </Helmet>
      <Grid container spacing={0} direction="column" alignItems="stretch">
        {informationItemsList}
      </Grid>
    </>
  );
};

export default NewsView;
