import React from "react";
import { useSelector } from "react-redux";
import { Typography, Box } from "@material-ui/core";
import ServiceListItem from "./ServiceListItem";

const ServiceListing = () => {
  const { serviceSearchResults } = useSelector((state) => state);

  return (
    <Box data-cy="search-results" >
      {serviceSearchResults.services ?
        serviceSearchResults.services.map((listing, index) => (
          <ServiceListItem key={listing.id} index={index} listing={listing} />
        )) : <Typography>No results to display..</Typography>}
    </Box>
  );
};

export default ServiceListing;
