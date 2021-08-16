import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignContent: "flex-start",
      justifyContent: "space-evenly",
      marginBottom: "50px",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
      height: "100vh",
    },
  },
}));

const ScreenSplit = ({ left = <></>, right = <></>, centered = false }) => {
  const classes = useStyles();
  let styleGridItem = {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    justifyContent: "space-evenly",
    padding: "15px",
  };

  if (centered) {
    styleGridItem = {
      ...styleGridItem,
      height: "606px",
      justifyContent: "space-evenly",
    };
  }

  return (
    <Grid container className={classes.gridContainer}>
      {left && (
        <Grid item xs={12} lg={6}>
          <Box component="div" style={styleGridItem}>
            {left}
          </Box>
        </Grid>
      )}
      {right && (
        <Grid item xs={12} lg={6}>
          <Box component="div" style={styleGridItem}>
            {right}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default ScreenSplit;
