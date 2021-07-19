import React from "react"
import LogoCHWL from "../assets/LogoCHWL.png"

const IndexView = () => {

  return (
    <>
      <div style={styles.screenSplitContainer}>
        <div style={styles.cell}>
          <img
            src={LogoCHWL}
            data-cy="logo"
            style={{ width: "100%" }}
            alt="Community Health West London"
          />
          <h3 data-cy="mission-statement" style={styles.missionStatement}>
            Our aim is to improve people's health and well-being
          </h3>
        </div>
        <div style={styles.cell}></div>
      </div>
    </>
  )
}

export default IndexView

const styles = {
  screenSplitContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "80vh",
    alignItems: "center",
  },
  missionStatement: {
    fontSize: "24px",
    margin: "0 50px",
    textAlign: "center",
  },
  cell: {
    width: "50%",
    padding: "50px",
  },
}
