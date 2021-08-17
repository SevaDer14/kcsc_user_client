import { Typography, Box } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet-async";

const ErrorView = () => {
  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <Box>
        <Typography data-cy="header" color="error" variant="h3">
          ERROR
        </Typography>
        <Typography data-cy="message" color="error" variant="body1">
          We are sorry, but the requested page cannot be loaded, please try
          again later.
        </Typography>
      </Box>
    </>
  );
};

export default ErrorView;
