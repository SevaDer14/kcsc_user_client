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
import { makeStyles } from "@material-ui/core/styles";
import store from "../state/store/configureStore";
import Search from "../modules/Search";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    [theme.breakpoints.up("xs")]: {
      height: "45.6px",
      marginBottom: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "55.6px",
      marginBottom: "10%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "65.6px",
      marginBottom: "5%",
    },
  },
}));

const ServiceSearch = () => {
  const classes = useStyles();
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const route = useRouteMatch("/home");
  const [advanced, setAdvanced] = useState(false);
  const [serviceCategory, setServiceCategory] = useState("");

  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
  ];

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
      <Box style={styles.fullWidth}>
        <Box
          data-cy="self-care-search-bar"
          className={classes.searchBar}
          style={styles.searchBar}
        >
          <Grid container justify="center">
            <Grid item xs={10} sm={advanced ? 5 : 8}>
              <OutlinedInput
                data-cy="search-query"
                onChange={(e) => setQuery(e.target.value)}
                color="secondary"
                value={query}
                placeholder={"Search for a service..."}
                aria-describedby="Search for self care services"
                className={classes.queryInput}
                style={styles.queryInput}
              />
            </Grid>
            <Hidden xsDown>
            {advanced && (
              <Grid item sm={3}>
                <FormControl
                  variant="outlined"
                  style={styles.dropdownContainer}
                >
                  <InputLabel htmlFor="dropdown">Category</InputLabel>
                  <Select
                    color="secondary"
                    data-cy="advanced-search-dropdown"
                    style={styles.dropdown}
                    onChange={(e) => setServiceCategory(e.target.value)}
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
            <Grid item xs={2} sm={1}>
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

            <Hidden xsDown>
              <Grid item xs={3} style={styles.center}>
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
                    style={styles.checkbox}
                  />
                </FormGroup>
              </Grid>
            </Hidden>
            
            <Grid container sm={12}>
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
    height: "100%",
    width: "100%",
    borderRadius: "36px 0 0 36px",
    backgroundColor: "white",
  },
  dropdownContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  dropdown: {
    borderRadius: "0px",
    //border: "0.1px solid #aaa"
  },
  checkbox: {
    paddingLeft: "24px"
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
  center: {
    alignSelf: "center",
  },
};
