import React from "react"
import LogoCHWL from "../assets/LogoCHWL.png"
import { Grid, Box } from "@material-ui/core"

const IndexView = () => {
  return (
    <>
      <Grid container justifyItems="center">
        <Grid item xs={12} lg={6}>
          <Box component="div" style={styles.gridItem}>
            <img
              src={LogoCHWL}
              data-cy="logo"
              style={styles.image}
              alt="Community Health West London"
            />
            <h3 data-cy="mission-statement" style={styles.statement}>
              Our aim is to improve people's health and well-being
            </h3>
          </Box>
        </Grid>        
      </Grid>
    </>
  )
}

export default IndexView

const styles = {
  gridItem: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justufyContent: "center",
    paddingTop: "10vh",
  },
  image: {
    width: "100%",
  },
  statement: {
    textAlign: "center",
    fontSize: "36px",
    padding: "0 20px",
  },
}
