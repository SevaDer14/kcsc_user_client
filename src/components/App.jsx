import React from "react";
import { Container, Box } from "@material-ui/core";
import Navbar from "./Navbar/Navbar";
import ApplicationFooter from "./ApplicationFooter";
import MessageModal from "./MessageModal";
import ScrollToTop from "./ScrollToTop";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const App = ({ component }) => {
  const layoutLoadError = useSelector((state) => state.layoutLoadError);

  return (
    <>
      {layoutLoadError && <Redirect to="/error" />}
      <ScrollToTop />
      <MessageModal />
      <Navbar />
      <Container maxWidth="xl" style={styles.zeroLRpadding}>
        <Box my={10}>{component}</Box>
      </Container>
      <ApplicationFooter />
    </>
  );
};

export default App;

const styles = {
  zeroLRpadding: {
    minHeight: '65vh',
    paddingLeft: "0px",
    paddingRight: "0px",
  },
};
