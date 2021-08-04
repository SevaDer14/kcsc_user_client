import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid, makeStyles } from "@material-ui/core";
//import Sections from "../modules/Sections";
import services_view_section from "../data/fixtures/services_view_section.json";
import SectionSelector from "../components/Section/SectionSelector";
import {toKebabCase} from '../modules/Functions.js'

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
    },
  },
}));

const ServicesView = () => {
  const classes = useStyles();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      //let response = await Sections.read("services")
      //setSections(response);
      setSections(services_view_section.sections);
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

  return (
    <>
      <Helmet>
        <title>Self Care Services</title>
      </Helmet>
      <Grid
        container
        className={classes.grid}
        spacing={0}
      >
        {sectionList}
      </Grid>
    </>
  );
};

export default ServicesView;
