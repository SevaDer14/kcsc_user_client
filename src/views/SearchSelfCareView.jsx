import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import axios from "axios";
import { Helmet } from "react-helmet";
import SelfCareListings from "../components/searchSelfCareView/SelfCareListings"

const SearchSelfCareView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const performSearch = async () => {
    const response = await axios.get(`/api/search?q=${searchQuery}`, {
      headers: { API_KEY: process.env.REACT_APP_API_KEY },
    });
    setSearchResults(response.data);
  };

  return (
    <>
      <Helmet>
        <title>Search Self Care</title>
      </Helmet>
      <h3 data-cy="header-subtitle">Search for services</h3>
      <Input
        data-cy="search-query"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        data-cy="search-submit"
        onClick={() => performSearch()}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
      <SelfCareListings searchResults={searchResults}/>
    </>
  );
};

export default SearchSelfCareView;
