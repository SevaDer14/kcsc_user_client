import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useRouteMatch } from "react-router-dom";
import {
  Button,
  Box,
  FormHelperText,
  OutlinedInput,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import store from "../state/store/configureStore";
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
}));

const ServiceSearch = () => {
  const classes = useStyles();
  const [query, setQuery] = useState()
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const route = useRouteMatch("/home");
  const [advanced, setAdvanced] = useState(false)

  const setSearchQuery = () => {
    dispatch({
      type: "SET_SEARCH_QUERY",
      payload: query,
    });
  };

  const performSearch = async () => {
    setSearchQuery();
    await Search.create(store.getState().query);    
    if (route) {
      setRedirect(true);
    }
  };

  useEffect(() => {
    let storeQuery = store.getState().query
    const getAllServices = async () => {
      if (!storeQuery) {
        await Search.index();        
      }
    };
    getAllServices();
    setQuery(storeQuery);
  }, [dispatch]);

  return (
    <>
      {redirect && <Redirect to="/services/search" />}
      <Box style={styles.fullWidth}>
        <Box
          data-cy="self-care-search-bar"
          className={classes.searchBar}
          style={styles.searchBar}
        >
          <Grid container justify="center">
            <Grid item xs={6}>
              <OutlinedInput
                data-cy="search-query"
                onChange={(e) => setQuery(e.target.value)}
                color="secondary"
                value={query}
                placeholder={"Search for a community service..."}
                aria-describedby="Search for self care services"
                className={classes.queryInput}
                style={styles.queryInput}
              />
            </Grid>
            <Grid item xs={2}>
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
            </Grid>
            <Grid item xs={2}>
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
            </Grid>
            <Grid container xs={8}>
              <FormHelperText style={styles.helperText}>
                Try "befriending" or "sports".
              </FormHelperText>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ServiceSearch;

const styles = {
  searchBar: {
    display: "flex",
    flexDirection: "column",
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
    height: "100%",
  },
  fullWidth: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
};
