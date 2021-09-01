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
      height: "auto",
      width: "100%",
      overFlow: "hidden",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: "80px",
      paddingBottom: "80px",
    },
  },
  image: {
    [theme.breakpoints.up("xs")]: {
      height: "200px",
      objectFit: "cover",
    },
    [theme.breakpoints.up("lg")]: {
      width: "300px",
      height: "300px",
      borderRadius: "10px",
      marginRight: "40px",
      marginLeft: "60px",
    },
  },
  contentContainer: {
    [theme.breakpoints.up("lg")]: {
      paddingTop: "20px",
    },
  },
  header: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "20px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "30px",
    },
  },
  description: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: "30px",
      marginRight: "30px",
      fontSize: "1.2rem",
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
      <Grid item md={6} className={classes.contentContainer}>
        <CardMedia
          component="img"
          image={image.url}
          data-cy="image"
          className={classes.image}
          alt="Community Health West London"
        />
      </Grid>
      <Grid item md={6} className={classes.contentContainer}>
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
