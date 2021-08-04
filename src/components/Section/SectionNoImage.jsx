import React from "react";
import { Typography, Grid } from "@material-ui/core";

const Section = ({ header, description }) => {
  return (
    <Grid
      style={styles.section}
      container
      alignItems="center"
      direction="column"
      data-cy="page-section"
    >
      <Typography data-cy="header" variant="h3" component="h3">
        {header}
      </Typography>
      <Typography
        data-cy="description"
        variant="body1"
        component="p"
        gutterBottom
      >
        {description}
      </Typography>
    </Grid>
  );
};

export default Section;

const styles = {
  section: {
    height: "auto",
    padding: "40px 15%",
  },
};
