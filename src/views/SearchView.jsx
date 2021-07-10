import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import axios from "axios";

const SearchView = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const performSearch = async () => {
    const response = await axios.get(`/api/search?q=${searchText}`);
    setSearchResults(response.data);
  };

  return (
    <>
      <h3 data-cy="header-subtitle">Search for services</h3>
      <Input
        data-cy="search-query"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        data-cy="search-submit"
        onClick={() => performSearch()}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
      <div data-cy="search-results">
        {searchResults.services && searchResults.services.map((result) => (
          <div key={result.id}>
            <h4>{result.name}</h4>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchView;
