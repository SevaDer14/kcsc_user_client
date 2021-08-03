import React from "react";
import { Typography, Button, Grid, Paper, makeStyles } from "@material-ui/core";

import SectionWide from "./SectionWide";
import SectionCenter from "./SectionCenter";

const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "space-around",
      height: "auto",
      width: "100vw",
      // marginBottom: "20%",
      textAlign: "center",
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
      <Typography variant="button" style={styles.buttonText}>
        {button.text}
      </Typography>
    </Button>
  ));

  return (
    <Paper className={classes.section} elevation={0}>
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

const styles = {
  section: {
    height: "650px",
    backgroundSize: "cover",
  },
  itemContainer: {
    padding: "5%",
  },
  image: {
    width: "100%",
    maxHeight: "400px",
    borderRadius: "10px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
};
