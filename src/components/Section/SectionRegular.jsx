import React from "react";
import { Typography, Button, Box } from "@material-ui/core";

import SectionWide from "./SectionWide";
import SectionCenter from "./SectionCenter";

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
    <Box
      data-cy="page-section"
    >
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
    </Box>
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
