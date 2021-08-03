import React from "react";
import {
  Typography,
  Box,
  Grid,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "500px",
      width: "100%",
      overFlow: "hidden",
      marginBottom: "10%",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: "80px",
      marginRight: "13%",
      marginLeft: "10%",
    },
  },
  image: {
    [theme.breakpoints.up("xs")]: {
      height: "200px",
      objectFit: "cover",
    },
    [theme.breakpoints.up("lg")]: {
      height: "300px",
      width: "660px",
      objectFit: "contain",
      borderRadius: "10px",
      marginRight: "40px",
      marginLeft: "60px",
    },
  },
  contentContainer: {
    [theme.breakpoints.up("lg")]: {
      width: "70%",
      paddingLeft: "40px",
      paddingRight: "40px",
    },
  },
  header: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "10px",
    },
  },
  description: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: "30px",
      marginRight: "30px",
    },
  },
  button: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "35px",
    },
  },
}));

const SectionCenter = ({ header, description, image, buttons, buttonList }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.section}>
      <CardMedia
        component="img"
        image={image.url}
        data-cy="image"
        className={classes.image}
        alt="Community Health West London"
      />
      <Grid item className={classes.contentContainer}>
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
