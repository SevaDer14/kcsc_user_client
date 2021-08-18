import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useRouteMatch } from "react-router-dom";
import {
  Button,
  Box,
  FormHelperText,
  OutlinedInput,
  Grid,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  Select,
  InputLabel,
  MenuItem,
  Hidden,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import store from "../state/store/configureStore";
import Search from "../modules/Search";
import categories from "../data/categories.js";
import serviceSearchTheme from "../theme/serviceSearchThem";

const ServiceSearch = () => {
  const classes = serviceSearchTheme();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const route = useRouteMatch("/home");
  const [advanced, setAdvanced] = useState(false);
  const [serviceCategory, setServiceCategory] = useState("All");

  const setSearchQuery = () => {
    dispatch({
      type: "SET_SEARCH_QUERY",
      payload: query,
    });
  };

  const performSearch = async (category) => {
    if (query === "") {
      await Search.index();
    } else {
      setSearchQuery();
      await Search.create(
        store.getState().query,
        category ? category : serviceCategory
      );
      route && setRedirect(true);
    }
  };

  useEffect(() => {
    let storeQuery = store.getState().query;
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
      <Box className={classes.fullWidth}>
        <Box data-cy="self-care-search-bar" className={classes.searchBar}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={10} sm={advanced ? 5 : route ? 10 : 8}>
              <OutlinedInput
                variant="outlined"
                data-cy="search-query"
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => {
                  e.key === "Enter" && performSearch();
                }}
                color="secondary"
                value={query}
                placeholder={"Search for a service..."}
                aria-describedby="Search for self care services"
                className={classes.queryInput}
              />
            </Grid>
            <Hidden xsDown>
              {advanced && (
                <Grid item sm={3}>
                  <FormControl
                    variant="outlined"
                    className={classes.dropdownContainer}
                  >
                    <InputLabel htmlFor="dropdown">Category</InputLabel>
                    <Select
                      id="fisk"
                      color="secondary"
                      data-cy="advanced-search-dropdown"
                      className={classes.dropdown}
                      onChange={(e) => {
                        setServiceCategory(e.target.value);
                        performSearch(e.target.value);
                      }}
                      value={serviceCategory}
                      label="Category"
                      aria-describedby="Choose categories of self care services"
                      inputProps={{
                        id: "dropdown",
                      }}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              )}
            </Hidden>
            <Grid item xs={2} sm={route ? 2 : 1}>
              <Button
                data-cy="search-submit"
                onClick={() => performSearch()}
                variant="contained"
                color="secondary"
                className={classes.searchButton}
                disableElevation
              >
                <SearchIcon />
              </Button>
            </Grid>
            <Hidden smUp>
              <FormHelperText id="mask" className={classes.helperText}>
                {'Try "befriending" or "sports"'}
              </FormHelperText>
            </Hidden>
            {!route && (
              <Grid item xs={7} sm={3} className={classes.checkbox}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        data-cy="advanced-search-checkbox"
                        checked={advanced}
                        onChange={(e) => setAdvanced(e.target.checked)}
                      />
                    }
                    label="Advanced"
                    className={classes.checkbox}
                  />
                </FormGroup>
              </Grid>
            )}
            <Hidden smUp>
              {advanced && (
                <Grid item xs={4}>
                  <FormControl
                    variant="outlined"
                    className={classes.dropdownContainer}
                  >
                    <InputLabel htmlFor="dropdown">Category</InputLabel>
                    <Select
                      color="secondary"
                      data-cy="advanced-search-dropdown"
                      className={classes.dropdownMobile}
                      onChange={(e) => {
                        setServiceCategory(e.target.value);
                        performSearch(e.target.value);
                      }}
                      value={serviceCategory}
                      label="Category"
                      aria-describedby="Choose categories of self care services"
                      inputProps={{
                        id: "dropdown",
                      }}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              )}
            </Hidden>
          </Grid>
          <Hidden xsDown>
            <FormHelperText className={classes.helperText}>
              {'Try "befriending" or "sports"'}
            </FormHelperText>
          </Hidden>
        </Box>
      </Box>
    </>
  );
};

export default ServiceSearch;
