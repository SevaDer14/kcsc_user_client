import React from "react";
import { Typography, Box, Grid, CardMedia } from "@material-ui/core";
import centerSectionTheme from "../../theme/centerSectionTheme";

const SectionCenter = ({ header, description, image, buttons, buttonList }) => {
  const classes = centerSectionTheme();
  return (
    <Grid item container className={classes.section}>
      <Grid item xs={12} lg={6} className={classes.contentContainer}>
        <Box className={classes.imageBox}>
          <CardMedia
            component="img"
            image={image.url}
            data-cy="image"
            className={classes.image}
            alt="Community Health West London"
          />
        </Box>
      </Grid>
      <Grid item xs={12} lg={6} className={classes.contentContainer}>
        <Typography
          data-cy="header"
          variant="h3"
          component="h3"
          className={classes.header}
          gutterBottom
        >
          {header}
        </Typography>
        <Typography
          data-cy="description"
          variant="body1"
          component="p"
          className={classes.description}
          gutterBottom
        >
          {description}
        </Typography>
        <Box className={classes.button}>{buttons && buttonList}</Box>
      </Grid>
    </Grid>
  );
};

export default SectionCenter;
