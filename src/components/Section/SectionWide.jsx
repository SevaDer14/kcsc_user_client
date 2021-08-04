import React from "react";
import {
  Typography,
  Box,
  Grid,
  CardMedia,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      height: "auto",
      width: "100%",
      overFlow: "hidden",
      marginBottom: "0px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "400px",
    },
  },
  image: {
    [theme.breakpoints.up("xs")]: {
      height: "200px",
      objectFit: "cover",
    },
    [theme.breakpoints.up("lg")]: {
      height: "400px",
    },
  },
  contentContainer: {
    [theme.breakpoints.up("xs")]: {
      marginBottom: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "rgba(0,0,0,0.7)",
      position: "absolute",
      zIndex: "50",
      left: "0px",
      paddingTop: "30px",
      paddingBottom: "50px",
      paddingRight: "50px",
      paddingLeft: "50px",
      width: "50%",
      height: "315px",
      marginTop: "-357px",
      textAlign: "left",
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
    [theme.breakpoints.up("lg")]: {
      marginLeft: "50px",
      color: "#fff",
    },
  },
  description: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: "30px",
      marginRight: "30px",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "50px",
      color: "#fff",
    },
  },
  button: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "30px",
      marginLeft: "20px",
      marginRight: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "50px",
    },
  },
}));

const SectionWide = ({ header, description, image, buttons, buttonList }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.section} elevation={0}>
      <Grid item xs={12}>
        <CardMedia
          component="img"
          image={image.url}
          data-cy="image"
          className={classes.image}
          alt="Community Health West London"
        />
        <Grid className={classes.contentContainer} item xs={12}>
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
    </Paper>
  );
};

export default SectionWide;
