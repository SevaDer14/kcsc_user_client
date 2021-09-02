import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionUnEven: {
    [theme.breakpoints.up("xs")]: {
      backgroundColor: "#ddd",
      height: "auto",
      textAlign: "center",
      padding: "30px",
      width: '100vw'
    },
    [theme.breakpoints.up("sm")]: {
      padding: "40px 80px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "40px 400px",
    },
  },
  sectionEven: {
    [theme.breakpoints.up("xs")]: {
      backgroundColor: "#eee",
      height: "auto",
      textAlign: "center",
      padding: "30px",
      width: '100vw'
    },
    [theme.breakpoints.up("sm")]: {
      padding: "40px 80px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "40px 20%",
    },
  },
  header: {
    [theme.breakpoints.up("xs")]: {
      paddingBottom: "25px",
    },
  },
  description: {
    fontSize: '1.5rem'
  }
}));

const Section = ({ header, description, id }) => {
  const classes = useStyles();
  let idEven = id % 2 === 0;
  return (
    <Grid
      item
      className={idEven ? classes.sectionEven : classes.sectionUnEven}
      container
      alignItems="center"
      direction="column"
      data-cy="page-section"
    >
      <Typography
        data-cy="header"
        variant="h3"
        component="h3"
        className={classes.header}
      >
        {header}
      </Typography>
      <Typography
        data-cy="description"
        variant="body1"
        component="p"
        gutterBottom
        className={classes.description}
      >
        {description}
      </Typography>
    </Grid>
  );
};

export default Section;
