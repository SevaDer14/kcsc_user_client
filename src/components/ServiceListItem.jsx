import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Hidden
} from "@material-ui/core";
import Service from "./Service";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "28px",
    },
  },
}));

const ServiceListItem = ({ listing }) => {
  const classes = useStyles()

  return (
    <>
      <Accordion key={listing.id} variant="outlined" style={styles.listing}>
        <AccordionSummary>
          <Typography  variant="h5" component="h2" className={classes.heading}>
            {listing.name}
          </Typography>
          <Hidden xsDown>
          <Typography variant="body2" component="p" style={styles.shortDescription}>
            Can be some short description here...
          </Typography>
          </Hidden>
        </AccordionSummary>
        <AccordionDetails>
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
    alignSelf: "center"
  },
};
