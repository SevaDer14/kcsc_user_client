import React from 'react'
import { Container } from "@material-ui/core";
import SelfCareListItem from "./SelfCareListItem";

const SelfCareListings = ({searchResults}) => {
  return (
    <Container data-cy="search-results" maxWidth="md">
        {searchResults.services &&
          searchResults.services.map((listing) => (
            <SelfCareListItem listing={listing} />
          ))}
      </Container>
  )
}

export default SelfCareListings
