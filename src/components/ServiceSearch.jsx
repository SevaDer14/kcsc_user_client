import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useRouteMatch } from "react-router-dom";
import {
  Button,
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import Search from "../modules/Search";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    [theme.breakpoints.up("xs")]: {
      height: "45.6px",
      marginLeft: "5%",
      marginBottom: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "420px",
      height: "55.6px",
      marginBottom: "10%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "420px",
      height: "65.6px",
      marginBottom: "5%",
    },
  },
  queryInput: {
    [theme.breakpoints.up("xs")]: {
      height: "45.6px",
    },
    [theme.breakpoints.up("md")]: {
      height: "55.6px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "65.6px",
    },
  },
  searchButton: {
    [theme.breakpoints.up("xs")]: {
      height: "45.6px",
    },
    [theme.breakpoints.up("md")]: {
      height: "55.6px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "59px",
    },
  },
}));

const ServiceSearch = () => {
  const classes = useStyles();
  const searchQuery = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const route = useRouteMatch("/home");

  const setSearchQuery = (query) => {
    dispatch({
      type: "SET_SEARCH_QUERY",
      payload: query,
    });
  };

  const performSearch = async () => {
    const response = await Search.create(searchQuery);
    dispatch({
      type: "SET_SEARCH_RESULTS",
      //payload: response.data,
      payload: response,
    });
    if (route) {
      setRedirect(true);
    }
  };

  return (
    <>
      {redirect && <Redirect to="/services/search" />}
      <Box style={styles.fullWidth}>
        <Box
          data-cy="self-care-search-bar"
          className={classes.searchBar}
          style={styles.searchBar}
        >
          <FormControl>
            <OutlinedInput
              data-cy="search-query"
              onChange={(e) => setSearchQuery(e.target.value)}
              color="secondary"
              value={searchQuery}
              placeholder={"Search for a community service..."}
              aria-describedby="Search for self care services"
              className={classes.queryInput}
              style={styles.queryInput}
            />
            <FormHelperText style={styles.helperText}>
              Try "befriending" or "sports".
            </FormHelperText>
          </FormControl>
          <Button
            data-cy="search-submit"
            onClick={() => performSearch()}
            variant="contained"
            color="secondary"
            className={classes.searchButton}
            style={styles.searchButton}
            disableElevation
          >
            <SearchIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ServiceSearch;

const styles = {
  searchBar: {
    display: "flex",
    flexDirection: "row",
    padding: "25px 0",
  },
  queryInput: {
    width: "100%",
    borderRadius: "36px 0 0 36px",
  },
  helperText: {
    marginLeft: "24px",
  },
  searchButton: {
    borderRadius: "0 36px 36px 0",
  },
  fullWidth: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  }
};
