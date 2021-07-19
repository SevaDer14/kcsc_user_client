import React from "react"
import { Container, Box } from "@material-ui/core"
import ApplicationHeader from "./ApplicationHeader"

const App = ({ component }) => {
  return (
    <>
      <ApplicationHeader />
      <Container maxWidth="1920px">
        <Box my={10}>{component}</Box>
      </Container>
    </>
  )
}

export default App
