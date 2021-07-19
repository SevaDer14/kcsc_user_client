import React from "react"
import LogoCHWL from "../assets/LogoCHWL.png"
import { Grid } from "@material-ui/core"

const IndexView = () => {
  return (
    <>
      <Grid container justifyItems="center">
        <Grid item xs={12} md={6}>
          <img
            src={LogoCHWL}
            data-cy="logo"
            style={styles.image}
            alt="Community Health West London"
          />
          <h3 data-cy="mission-statement" style={styles.statement}>
            Our aim is to improve people's health and well-being
          </h3>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <h1 style={styles.slider}>Richard's Story</h1>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default IndexView

const styles = {
  image: {
    width: "100%",
    marginTop: "13%",
    marginLeft: "auto",
    paddingRight: "auto",
    textAlign: "center",
  },
  statement: {
    textAlign: "center",
    fontSize: "36px"
  },
  slider: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "36px"
  },
}
