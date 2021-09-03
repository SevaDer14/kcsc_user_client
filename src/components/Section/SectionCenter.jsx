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
      alignItems: "center",
      height: "auto",
      width: "100%",
      overFlow: "hidden",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      width: "80%",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "80px",
      paddingBottom: "80px",
      borderBottom: "1px solid #bbb6",
      maxWidth: theme.breakpoints.values.xl,
    },
  },
  image: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      height: "350px",
      objectFit: "cover",
    },
    [theme.breakpoints.up("md")]: {
      borderRadius: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      height: "350px",
      marginRight: "40px",
      marginLeft: "60px",
    },
  },
  contentContainer: {
    [theme.breakpoints.up("lg")]: {
      paddingTop: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      marginLeft: "2px",
      marginRight: "30px",
      fontSize: "1.2rem",
      textAlign: "left",
      padding: "0 3rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0",
    },
  },
  button: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "35px",
      marginLeft: "-8px",
    },
  },
}));

const SectionCenter = ({ header, description, image, buttons, buttonList }) => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.section}>
      <Grid item xs={12} lg={6} className={classes.contentContainer}>
        <CardMedia
          component="img"
          image={image.url}
          data-cy="image"
          className={classes.image}
          alt="Community Health West London"
        />
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
