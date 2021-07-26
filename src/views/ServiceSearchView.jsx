import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceSearch from "../components/ServiceSearch";
import ServiceListing from "../components/ServiceListing";
import Map from "../components/Map";
import ScreenSplit from "../components/ScreenSplit";

const SearchSelfCareView = () => {
  return (
    <>
      <Helmet>
        <title>Search for Self Care services</title>
      </Helmet>
      <ServiceSearch />
      <ScreenSplit left={<ServiceListing />} right={<Map />} />
    </>
  );
};

export default SearchSelfCareView;
