import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.up("xs")]: {
      marginBottom: "-30%",
      marginTop: "-40%",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "30%",
      marginTop: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "0%",
      marginTop: "0%",
    },
  },
}));

const ScreenSplit = ({ left = <></>, right = <></>, centered = false }) => {
  const classes = useStyles();
  let styleGridItem = {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    padding: "10px",
  };

  if (centered) {
    styleGridItem = {
      ...styleGridItem,
      justifyContent: "center",
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
