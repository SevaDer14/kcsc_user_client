import React from "react"
import LogoCHWL from "../assets/LogoCHWL.png"

const IndexView = () => {
  return (
    <>
      <img
        src={LogoCHWL}
        data-cy="logo"
        style={{ height: "320px", width: "auto" }}
        alt="Community Health West London"
      />
      <h3 data-cy="mission-statement" style={{ fontSize: "30px" }}>
        Our aim is to improve people's health and well-being
      </h3>
    </>
  )
}

export default IndexView
