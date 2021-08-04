import React from "react";
import { Typography, Button, Grid, Paper, makeStyles } from "@material-ui/core";

import SectionWide from "./SectionWide";
import SectionCenter from "./SectionCenter";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("xs")]: {
      padding: "0",
    },
  },
  section: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "space-around",
      height: "auto",
      width: "100vw",
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      left: "0px"
    },
  },
}));

const Section = ({ id, header, description, image, buttons }) => {
  const classes = useStyles();
  let idEven = id % 2 === 0;

  const buttonList = buttons.map((button) => (
    <Button
      key={button.id}
      data-cy={`button_${button.id}`}
      variant="contained"
      color="secondary"
      href={button.link}
    >
      <Typography variant="button" >
        {button.text}
      </Typography>
    </Button>
  ));

  return (
    <Paper className={classes.container} elevation={0}>
      <Grid item className={classes.section} data-cy="page-section">
        {idEven ? (
          <SectionCenter
            header={header}
            description={description}
            image={image}
            buttons={buttons}
            buttonList={buttonList}
          />
        ) : (
          <SectionWide
            header={header}
            description={description}
            image={image}
            buttons={buttons}
            buttonList={buttonList}
          />
        )}
      </Grid>
    </Paper>
  );
};

export default Section;
