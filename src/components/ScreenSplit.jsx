import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    [theme.breakpoints.up("xs")]: {
      height: "auto",
      marginTop: "0",
      marginBottom: "0%"
    },
    [theme.breakpoints.up("sm")]: {
      height: "auto",
      marginTop: "0",
      marginBottom: "0%"
    },
    [theme.breakpoints.up("lg")]: {
      height: "80vh",
      marginTop: "0%",
      marginBottom: "0%"
    },
  },
}));

const ScreenSplit = ({ left=(<></>), right=(<></>), centered = false }) => {
  const classes = useStyles()
  let styleGridItem = {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  }

  if (centered) {
    styleGridItem = {
      ...styleGridItem,
      justifyContent: "center",
    };
  }

  return (
    <Grid container>
      {left && (
        <Grid item xs={12} lg={6}>
          <Box component="div" className={classes.gridItem} style={styleGridItem}>
            {left}
          </Box>
        </Grid>
      )}
      {right && (
        <Grid item xs={12} lg={6}>
          <Box component="div" className={classes.gridItem} style={styleGridItem}>
            {right}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default ScreenSplit;
