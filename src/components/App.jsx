import React, { Suspense } from "react";
import { Container, Box } from "@material-ui/core";
import ScrollToTop from "./ScrollToTop";
import LoadingScreen from "../views/LoadingScreen";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = React.lazy(() => import("./ApplicationFooter"));
const Navbar = React.lazy(() => import("./Navbar/Navbar"));
const MessageModal = React.lazy(() => import("./MessageModal"));

const App = ({ component }) => {
  const layoutLoadError = useSelector((state) => state.layoutLoadError);

  return (
    <Suspense fallback={<LoadingScreen />}>
      {layoutLoadError && <Redirect to="/error" />}
      <ScrollToTop />
      <MessageModal />
      <Navbar />
      <Container maxWidth="xl" style={styles.zeroLRpadding}>
        <Box my={10}>{component}</Box>
      </Container>
      <Footer />
    </Suspense>
  );
};

export default App;

const styles = {
  zeroLRpadding: {
    minHeight: "65vh",
    paddingLeft: "0px",
    paddingRight: "0px",
    marginTop: "-12px",
  },
};
