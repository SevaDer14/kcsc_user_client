import React, { useState } from "react";
import {
  Button,
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Requests from "../../modules/Requests";

const SelfCareSearchBar = ({ setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const performSearch = async () => {
    const response = await Requests.searchSelfCare(searchQuery);
    setSearchResults(response.data);
  };

  return (
    <Box data-cy="self-care-search-bar" style={styles.searchBar}>
      <FormControl>
        <OutlinedInput
          data-cy="search-query"
          onChange={(e) => setSearchQuery(e.target.value)}
          color="secondary"
          placeholder="Search Self Care"
          aria-describedby="Search for self care services"
          style={styles.queryInput}
        />
        <FormHelperText style={styles.helperText}>
          try searching for chess or dancing
        </FormHelperText>
      </FormControl>
      <Button
        data-cy="search-submit"
        onClick={() => performSearch()}
        variant="contained"
        color="secondary"
        style={styles.searchButton}
        disableElevation
      >
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SelfCareSearchBar;

const styles = {
  searchBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  queryInput: {
    borderRadius: "36px 0 0 36px",
  },
  helperText: {
    marginLeft: "24px",
  },
  searchButton: {
    height: "65.6px",
    borderRadius: "0 36px 36px 0",
  },
};
