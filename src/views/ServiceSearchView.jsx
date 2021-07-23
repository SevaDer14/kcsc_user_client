import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceSearch from "../components/ServiceSearch";
import ServiceListing from "../components/ServiceListing";
import Map from "../components/Map";
import { Grid, Box } from "@material-ui/core";

const SearchSelfCareView = () => {
  return (
    <>
      <Helmet>
        <title>Search for Self Care services</title>
      </Helmet>
      <ServiceSearch />
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box component="div" style={styles.gridItem} data-cy="search-results">
            <ServiceListing />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box component="div" style={styles.gridItem}>
            <Map />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchSelfCareView;

const styles = {
  gridItem: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
};
