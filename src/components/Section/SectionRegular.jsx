import React from "react";
import { Typography, Box, Button, Grid } from "@material-ui/core";

const Section = ({ id, header, description, image, buttons }) => {
  let idEven = id % 2 === 0;

  const buttonList = buttons.map((button) => (
    <Button
      key={button.id}
      data-cy={`button_${button.id}`}
      variant="contained"
      color="secondary"
      href={button.link}
      style={styles.button}
    >
      <Typography variant="button" style={styles.buttonText}>
        {button.text}
      </Typography>
    </Button>
  ));

  return (
    <Grid
      style={
        idEven
          ? styles.section
          : { ...styles.section, backgroundImage: `url(${image.url})` }
      }
      container
      alignItems="center"
      direction="row"
      data-cy="page-section"
    >
      {idEven && (
        <Grid item xs={12} lg={6} data-cy="image" style={styles.itemContainer}>
          <img style={styles.image} src={image.url} alt={image.alt} />
        </Grid>
      )}

      <Grid
        item
        xs={12}
        lg={6}
        style={
          idEven
            ? styles.itemContainer
            : { ...styles.itemContainer, backgroundColor: "#0008" }
        }
      >
        <Typography
          data-cy="header"
          variant="h3"
          component="h3"
          style={idEven ? { color: "#000" } : { color: "#fff" }}
          gutterBottom
        >
          {header}
        </Typography>
        <Typography
          data-cy="description"
          variant="body1"
          component="p"
          style={idEven ? { color: "#000" } : { color: "#fff" }}
          gutterBottom
        >
          {description}
        </Typography>
        <Box style={styles.buttonContainer}>{buttons && buttonList}</Box>
      </Grid>
    </Grid>
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
  button: {
    marginRight: "10px",
  },
  buttonText: {
    marginBottom: "-5px",
  },
};
