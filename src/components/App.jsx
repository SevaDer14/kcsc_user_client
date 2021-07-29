import React from "react";
import { Container, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import ApplicationFooter from "./ApplicationFooter";

const App = ({ component }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box my={10}>{component}</Box>
      </Container>
      <ApplicationFooter />
    </>
  );
};

export default App;
