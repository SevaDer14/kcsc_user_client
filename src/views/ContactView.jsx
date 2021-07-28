import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

import ScreenSplit from "../components/ScreenSplit";
import ContactUs from "../components/ContactUs";

const ContactView = () => {
  const { contact } = useSelector((state) => state.appData);

  return (
    <>
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      <ScreenSplit left={<ContactUs data={contact} />} />
    </>
  );
};

export default ContactView;
