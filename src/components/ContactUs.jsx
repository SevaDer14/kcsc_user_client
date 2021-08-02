import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("xs")]: {
      maxWidth: "600px",
      margin: "10% 0 10% 12%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "0%",
      marginBottom: "20%",
      marginLeft: "30%",
    },
  },

  heading: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "46px",
    },
  },

  text: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "16px",
      marginTop: "16px",
      wordWrap: "break-word",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      marginTop: "18px",
    },
  },
}));

const ContactUs = ({ data }) => {
  const classes = useStyles();

  return (
    <Box
      data-cy="contact-us"
      className={classes.container}
      style={styles.container}
    >
      <Typography
        data-cy="contact-us-header"
        variant="h3"
        component="h2"
        className={classes.heading}
      >
        Contact Us
      </Typography>
      <Typography
        data-cy="contact-us-email"
        variant="body1"
        component="p"
        className={classes.text}
      >
        Email:{" "}
        {data
          ? data.email
          : `Sorry can't reach the server please try again later`}
      </Typography>
      <Typography
        data-cy="contact-us-phone"
        variant={"body1"}
        component="p"
        className={classes.text}
      >
        Phone:{" "}
        {data
          ? data.phone
          : `Sorry can't reach the server please try again later`}
      </Typography>
    </Box>
  );
};

export default ContactUs;

const styles = {
  container: {  
    marginRight: "12%",
  },
};
