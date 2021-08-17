import { Typography, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import store from "../state/store/configureStore";

const ErrorView = () => {

  useEffect(() => {
    store.dispatch({ type: "SET_LAYOUT_LOAD_ERROR", payload: false });
  }, []);

  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <Container style={{paddingTop: '64px'}} maxWidth='sm'>
        <Typography data-cy="header" color="error" variant="h3">
          ERROR
        </Typography>
        <Typography data-cy="message"  variant="body1">
          We are sorry, but the requested page cannot be loaded, please try
          again later.
        </Typography>
      </Container>
    </>
  );
};

export default ErrorView;
