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
      paddingBottom: "50px",
    },
  },
  image: {
    [theme.breakpoints.up("xs")]: {
      // zIndex: "-1",
      height: "360px",
      width: "100%",
      objectFit: "cover",
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
      position: "relative",
    },
  },
}));

const SectionCenter = ({ header, description, image, buttons, buttonList }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.section}>
      <CardMedia
        component="img"
        image={image.url}
        data-cy="image"
        className={classes.image}
        alt="Community Health West London"
      />
      <Grid
        item
        // xs={12}
        // lg={6}
        // style={
        //   idEven
        //     ? styles.itemContainer
        //     : { ...styles.itemContainer, backgroundColor: "#0008" }
        // }
      >
        <Box>
          <Typography
            data-cy="header"
            variant="h3"
            component="h3"
            className={classes.header}
            // style={idEven ? { color: "#000" } : { color: "#fff" }}
            gutterBottom
          >
            {header}
          </Typography>
          <Typography
            data-cy="description"
            variant="body1"
            component="p"
            className={classes.description}
            // style={idEven ? { color: "#000" } : { color: "#fff" }}
            gutterBottom
          >
            {description}
          </Typography>
          <Box className={classes.button}>{buttons && buttonList}</Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SectionCenter;
