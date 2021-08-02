import React from "react";
import { Container, Box } from "@material-ui/core";
import Navbar from "./Navbar/Navbar";
import ApplicationFooter from "./ApplicationFooter";
import MessageModal from "./MessageModal";
import ScrollToTop from "./ScrollToTop";

const App = ({ component }) => {
  return (
    <>
      <ScrollToTop />
      <MessageModal />
      <Navbar />
      <Container maxWidth="xl">
        <Box my={10}>{component}</Box>
      </Container>
      <ApplicationFooter />
    </>
  );
};

export default App;
