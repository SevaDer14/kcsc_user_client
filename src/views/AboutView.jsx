import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Sections from "../modules/Sections";
import { Grid } from "@material-ui/core";
import SectionSelector from "../components/Section/SectionSelector";

const AboutView = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      let response = await Sections.read("about_us");
      setSections(response);
    };
    fetchPageData();
  }, []);

  const sectionList = sections.map(
    ({ id, variant, header, description, image, buttons }) => {
      return (
        <Grid item key={id}>
          <SectionSelector
            id={id}
            variant={variant}
            header={header}
            description={description}
            image={image}
            buttons={buttons}
          />
        </Grid>
      );
    }
  );

  return (
    <>
      <Helmet>
        <title>About: Community Health West London</title>
      </Helmet>
      <Grid container spacing={0} direction="column" alignItems="stretch">
        {sectionList}
      </Grid>
    </>
  );
};

export default AboutView;
