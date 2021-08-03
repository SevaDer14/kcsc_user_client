import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceSearch from "../components/ServiceSearch";
import ServiceListing from "../components/ServiceListing";
import { Container } from "@material-ui/core";

const SearchSelfCareView = () => {
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Search for Self Care services</title>
      </Helmet>
      <ServiceSearch />
      <ServiceListing />
    </Container>
  );
};

export default SearchSelfCareView;
