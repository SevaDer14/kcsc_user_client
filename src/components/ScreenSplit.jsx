import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    [theme.breakpoints.up("xs")]: {
      marginBottom: "-130%",
      height: "80vh",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "0",
      marginBottom: "0",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "0",
      marginBottom: "0",
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      padding: "10px",
    },
  },
}));

const ScreenSplit = ({ left = <></>, right = <></>, centered = false }) => {
  const classes = useStyles();

  if (centered) {
    classes.GridItem = {
      ...classes.styleGridItem,
      justifyContent: "center",
    };
  }

  return (
    <Grid container className={classes.GridItem}>
      {left && (
        <Grid item xs={12} lg={6}>
          <Box component="div" className={classes.GridItem}>
            {left}
          </Box>
        </Grid>
      )}
      {right && (
        <Grid item xs={12} lg={6}>
          <Box component="div" className={classes.gridItem}>
            {right}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default ScreenSplit;
