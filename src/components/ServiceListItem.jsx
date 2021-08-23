import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Hidden,
  Grid,
} from "@material-ui/core";
import Service from "./Service";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "22px",
    },
  },
}));

const ServiceListItem = ({ listing, index }) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const description = listing.description;
  const shortDescriptionText = description.split(".")[0];

  return (
    <>
      <Accordion
        data-cy={`search-result-${index}`}
        key={listing.id}
        variant="outlined"
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        style={styles.listing}
      >
        <AccordionSummary>
          <Grid container>
            <Grid item xs={10}>
              <Typography
                variant="h5"
                component="h2"
                className={classes.heading}
              >
                {listing.name}
              </Typography>
              <Hidden xsDown>
                <Typography
                  variant="body2"
                  component="p"
                  style={styles.shortDescription}
                >
                  {!expanded ? `${shortDescriptionText}...` : undefined}
                </Typography>
              </Hidden>
            </Grid>
            <Grid item xs={2} style={styles.readMore}>
              <Typography
                variant="body2"
                component="p"
                style={{ fontSize: "14px" }}
              >
                {!expanded ? "Show More" : "Show Less"}
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails data-cy={`search-result-${index}-details`}>
          <Service data={listing} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ServiceListItem;

const styles = {
  listing: {
    margin: "5px",
  },
  shortDescription: {
    color: "#696969",
    marginLeft: "30px",
    alignSelf: "center",
  },
  readMore: {
    color: "#E86406",
    textAlign: "right",
    alignSelf: "center",
  },
};
