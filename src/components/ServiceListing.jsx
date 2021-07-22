import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import ServiceListItem from "./ServiceListItem";

const ServiceListing = () => {
  const { serviceSearchResults } = useSelector((state) => state);

  return (
    <Container data-cy="search-results" maxWidth="md">
      {serviceSearchResults.services ?
        serviceSearchResults.services.map((listing) => (
          <ServiceListItem key={listing.id} listing={listing} />
        )) : <Typography>No results to display..</Typography>}
    </Container>
  );
};

export default ServiceListing;
