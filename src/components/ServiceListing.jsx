import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import SelfCareListItem from "./ServiceListItem";

const ServiceListing = () => {
  const { serviceSearchResults } = useSelector((state) => state);

  return (
    <Container data-cy="search-results" maxWidth="md">
      {serviceSearchResults.services &&
        serviceSearchResults.services.map((listing) => (
          <SelfCareListItem listing={listing} />
        ))}
    </Container>
  );
};

export default ServiceListing;
