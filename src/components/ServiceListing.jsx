import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import ServiceListItem from "./ServiceListItem";

const ServiceListing = () => {
  const { serviceSearchResults } = useSelector((state) => state);

  return (
    <div data-cy="search-results">
      {serviceSearchResults ?
        serviceSearchResults.map((listing) => (
          <ServiceListItem key={listing.id} listing={listing} />
        )) : <Typography>No results to display..</Typography>}
    </div>
  );
};

export default ServiceListing;
