import React from "react";
import { Grid, Box } from "@material-ui/core";

const ScreenSplit = ({ left=[], right=[], centered = false }) => {
  let styleGridItem = {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  }

  if (centered) {
    debugger
    styleGridItem = {
      ...styleGridItem,
      justifyContent: "center",
    };
  }

  return (
    <Grid container>
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
