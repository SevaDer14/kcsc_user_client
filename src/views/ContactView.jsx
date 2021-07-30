import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useMediaQuery, useTheme, Grid } from "@material-ui/core";
import ScreenSplit from "../components/ScreenSplit";
import ContactUs from "../components/ContactUs";
import ContactForm from "../components/ContactForm";

const ContactView = () => {
  const theme = useTheme();
  const { contact } = useSelector((contact) => contact.appData);
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <>
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      {mobile ? (
        <Grid container style={styles.alignVertically}>
          <Grid item>
            <ContactUs data={contact} />
          </Grid>
          <Grid item>
            <ContactForm />
          </Grid>
        </Grid>
      ) : (
        <ScreenSplit
        left={<ContactUs data={contact} />}
        right={<ContactForm />}
        centered={true}
      />
      )}
      
    </>
  );
};

export default ContactView;

const styles = {
  alignVertically: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }
}