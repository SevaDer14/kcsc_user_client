import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

import ScreenSplit from "../components/ScreenSplit";
import ContactUs from "../components/ContactUs";
import ContactForm from "../components/ContactForm";

const ContactView = () => {
  const { contact } = useSelector((contact) => contact.appData);

  return (
    <>
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      <ScreenSplit
        left={<ContactUs data={contact} />}
        right={<ContactForm />}
        centered={true}
      />
    </>
  );
};

export default ContactView;
