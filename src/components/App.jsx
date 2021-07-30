import React from "react";
import { Container, Box } from "@material-ui/core";
import ApplicationHeader from "./ApplicationHeader";
import ApplicationFooter from "./ApplicationFooter";
import MessageModal from './MessageModal'

const App = ({ component }) => {
  return (
    <>
      <MessageModal />
      <ApplicationHeader />
      <Container maxWidth="xl">
        <Box my={10}>{component}</Box>
      </Container>
      <ApplicationFooter />
    </>
  );
};

export default App;
