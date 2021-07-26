import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Search from "../modules/Search";

const ServiceSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const performSearch = async () => {
    const response = await Search.create(searchQuery);
    dispatch({ type: "SET_SEARCH_RESULTS", payload: response.data });
  };

  return (
    <Box data-cy="self-care-search-bar" style={styles.searchBar}>
      <FormControl>
        <OutlinedInput
          data-cy="search-query"
          onChange={(e) => setSearchQuery(e.target.value)}
          color="secondary"
          placeholder="Search for a community service..."
          aria-describedby="Search for self care services"
          style={styles.queryInput}
        />
        <FormHelperText style={styles.helperText}>
          Try searching for "befriending", "chess" or "sports".
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

export default ServiceSearch;

const styles = {
  searchBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "25px 0"
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
