import React, { useEffect, useState } from "react";
import axios from "axios"

const ServicesView = () => {
  const [sections, setSections] = useState([])

  useEffect( async () => {
    let response = await axios.get('/services')
    setSections(response.data.sections)
  }, []);

  return <></>;
};

export default ServicesView;
