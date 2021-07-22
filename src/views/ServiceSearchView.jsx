import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import ServiceSearch from "../components/ServiceSearch";

const SearchSelfCareView = () => {
  const { serviceSearchResults } = useSelector((state) => state);

  return (
    <>
      <Helmet>
        <title>Search for Self Care services</title>
      </Helmet>
      <h3 data-cy="header-subtitle">Search for services</h3>
      <ServiceSearch />
      <div data-cy="search-results">
        {serviceSearchResults.services &&
          serviceSearchResults.services.map((result) => (
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
