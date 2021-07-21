import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ServiceSearch from "../components/searchSelfCareView/ServiceSearch";

const SearchSelfCareView = () => {
  const [searchResults, setSearchResults] = useState({});

  return (
    <>
      <Helmet>
        <title>Search for Self Care services</title>
      </Helmet>
      <h3 data-cy="header-subtitle">Search for services</h3>
      <ServiceSearch setSearchResults={setSearchResults} />
      <div data-cy="search-results">
        {searchResults.services &&
          searchResults.services.map((result) => (
            <div key={result.id}>
              <h4>{result.name}</h4>
              <p>{result.description}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchSelfCareView;
