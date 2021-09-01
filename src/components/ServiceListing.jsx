import React from "react";
import { useSelector } from "react-redux";
import { Typography, Box } from "@material-ui/core";
import ServiceListItem from "./ServiceListItem";

const ServiceListing = () => {
  const { serviceSearchResults } = useSelector((state) => state);

  return (
    <Box data-cy="search-results">
      {serviceSearchResults.loading ? (
        <Typography>Loading services...</Typography>
      ) : serviceSearchResults.error_message ? (
        <Typography>{serviceSearchResults.error_message}</Typography>
      ) : serviceSearchResults.services ? (
        serviceSearchResults.services.map((listing, index) => (
          <ServiceListItem key={listing.id} index={index} listing={listing} />
        ))
      ) : (
        <Typography>No results found</Typography>
      )}
    </Box>
  );
};

export default ServiceListing;

// {serviceSearchResults.services ? (
//   serviceSearchResults.services.map((listing, index) => (
//     <ServiceListItem key={listing.id} index={index} listing={listing} />
//   ))
// ) : serviceSearchResults.services.length === 0 ? (
//   <Typography>No results found</Typography>
// ) : serviceSearchResults.error_message ? (
//   <Typography>{serviceSearchResults.error_message}</Typography>
// ) : (
//   <Typography>Loading services...</Typography>
// )}
