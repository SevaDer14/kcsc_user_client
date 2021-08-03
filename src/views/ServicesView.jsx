import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Grid } from "@material-ui/core";
//import Sections from "../modules/Sections";
import services_view_section from '../data/fixtures/services_view_section.json'
import SectionSelector from "../components/Section/SectionSelector";

const ServicesView = () => {
  const [sections, setSections] = useState([]);

  const toKebabCase = (string) =>
  string.replace(/\s+/g, "-").replace("&", "and").toLowerCase();

  useEffect(() => {
    const fetchPageData = async () => {
      //let response = await Sections.read("services")
      //setSections(response);
      setSections(services_view_section.sections);
    };
    fetchPageData();
  }, []);

  const sectionList = sections.map(
    (section) => {
      return (
        <Grid item key={section.id} id={toKebabCase(section.header)}>
          <SectionSelector
            id={section.id}
            section={section}
          />
        </Grid>
      );
    }
  );

  return (
    <>
      <Helmet>
        <title>Self Care Services</title>
      </Helmet>
      <Grid container spacing={0} direction="column" justifyContent="space-around" alignItems="center" wrap="nowrap">
        {sectionList}
      </Grid>
    </>
  );
};

export default ServicesView;
