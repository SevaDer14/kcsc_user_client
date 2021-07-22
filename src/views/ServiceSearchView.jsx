import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceSearch from "../components/ServiceSearch";
import ServiceListing from "../components/ServiceListing";

const SearchSelfCareView = () => {
  return (
    <>
      <Helmet>
        <title>Search for Self Care services</title>
      </Helmet>
      <h3 data-cy="header-subtitle">Search for services</h3>
      <ServiceSearch />
      <ServiceListing />
    </>
  );
};

export default SearchSelfCareView;
