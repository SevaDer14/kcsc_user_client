import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid, makeStyles } from "@material-ui/core";
import Sections from "../modules/Sections";
import SectionSelector from "../components/Section/SectionSelector";

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      marginTop: "120px",
    },
  },
}));

const ServicesView = () => {
  const classes = useStyles();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      let response = await Sections.index("services")
      setSections(response);
    };
    fetchPageData();
  }, []);

  const sectionList = sections.map((section, index) => {
    return (
      <Grid item key={section.id} id={`section-${index + 1}`}>
        <SectionSelector id={section.id} section={section} />
      </Grid>
    );
  });

  return (
    <>
      <Helmet>
        <title>Self Care Services</title>
      </Helmet>
      <Grid container className={classes.grid} spacing={0}>
        {sectionList}
      </Grid>
    </>
  );
};

export default ServicesView;
