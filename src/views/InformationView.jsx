import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid } from "@material-ui/core";
import Information from "../modules/Information";
import InformationItem from "../components/InformationItem";
import information_view_sections from "../data/fixtures/information_view_sections.json";
import {toKebabCase} from '../modules/Functions.js'

const NewsView = () => {
  const [pinnedItems, setPinnedItems] = useState([]);
  const [otherItems, setOtherItems] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      //let response = await Sections.read("about_us");
      //setSections(response);
      setSections(information_view_sections.sections);
      let response = await Information.index();
      setPinnedItems(response.pinned);
      setOtherItems(response.other);
    };
    fetchPageData();
  }, []);  

  const sectionList = sections.map((section) => {
    return (
      <Grid item key={section.id} id={toKebabCase(section.header)}>
        <SectionSelector id={section.id} section={section} />
      </Grid>
    );
  });

  const otherItemsList = otherItems.map((item, index) => {
    return (
      <Grid item key={item.id}>
        <InformationItem index={index} item={item} />
      </Grid>
    );
  });

  const pinnedItemsList = pinnedItems.map((item, index) => {
    return (
      <Grid item key={item.id} md={4}>
        <InformationCard index={index} item={item} />
      </Grid>
    );
  });

  return (
    <>
      <Helmet>
        <title>Information</title>
      </Helmet>
      <Grid container className={classes.grid} spacing={0}>
        {sectionList}
      </Grid>
      <Grid container spacing={5}>
        {pinnedItemsList}
      </Grid>
      <Grid container spacing={0} direction="column" alignItems="stretch">
        {otherItemsList}
      </Grid>
    </>
  );
};

export default NewsView;
