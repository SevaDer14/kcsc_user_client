import React from "react";
import { Typography, Box, Paper, Button } from "@material-ui/core";

const Section = ({ header, description, image, buttons }) => {
  const buttonList = buttons.map((button) => (
    <Button
      data-cy={`button_${button.id}`}
      variant="contained"
      color="secondary"
      href={button.link}
    >
      <Typography variant="button">{button.text}</Typography>
    </Button>
  ));

  return (
    <Box data-cy="service-section">
      <Typography data-cy="header" variant="h4" component="h3" gutterBottom>
        {header}
      </Typography>
      <Typography data-cy="description" variant="body1" component="p">
        {description}
      </Typography>
      <Paper variant="outlined" data-cy="image">
        <img src={image.url} alt={image.alt} />
      </Paper>
      {buttons && buttonList}
    </Box>
  );
};

export default Section;
