import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
//import Sections from "../modules/Sections";
import about_self_care_view_sections from "../data/fixtures/about_self_care_view_sections.json";
import { Grid } from "@material-ui/core";
import SectionSelector from "../components/Section/SectionSelector";

const AboutSelfCareView = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      //let response = await Sections.read("about_self_care");
      //setSections(response);
      setSections(about_self_care_view_sections.sections);
    };
    fetchPageData();
  }, []);

  const sectionList = sections.map((section) => {
    return (
      <Grid item key={section.id}>
        <SectionSelector id={section.id} section={section} />
      </Grid>
    );
  });

  return (
    <>
      <Helmet>
        <title>About: Self Care</title>
      </Helmet>
      <Grid container spacing={0} direction="column" alignItems="stretch">
        {sectionList}
      </Grid>
    </>
  );
};

export default AboutSelfCareView;
