import React from "react";
import { Container, Box } from "@material-ui/core";
import ApplicationHeader from "./ApplicationHeader";
import ApplicationFooter from "./ApplicationFooter";

const App = ({ component }) => {
  return (
    <>
      <ApplicationHeader />
      <Container maxWidth="xl">
        <Box my={10}>{component}</Box>
      </Container>
      <ApplicationFooter />
    </>
  );
};

export default App;
