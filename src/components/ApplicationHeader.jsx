import React from "react"
import { ReactComponent as Logo } from "../assets/LogoCHWLHorisontal.svg"
import { AppBar, Toolbar, useScrollTrigger, Slide } from "@material-ui/core"

const ApplicationHeader = () => {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Toolbar>
          <Logo
            data-cy="header-logo"
            style={{ height: "30px", width: "auto" }}
            alt="Community Health West London"
          />
        </Toolbar>
      </AppBar>
    </Slide>
  )
}

export default ApplicationHeader
