import React, { useState } from "react";
import { Grid, Box, Typography, Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Map from "./Map";

const useStyles = makeStyles((theme) => ({
  heading: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "46px",
    },
  },

  text: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "14px",
      wordWrap: "break-word",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },
}));

const ScreenSplit = ({ data }) => {
  const classes = useStyles();
  const [collapse, setCollapse] = useState(true);

  const mapDisplay = () => {
    if (collapse) {
      return <Button data-cy="toggle-map-visibility-button" size="small" color="secondary" onClick={()=>setCollapse(false)}>Show on map</Button>;
    } else {
      return (
        <Box component="div" style={styles.map}>
          <Button data-cy="toggle-map-visibility-button" size="small" color="secondary" onClick={()=>setCollapse(true)}>Collapse map</Button>
          <Map coordinates={data.coords} />
        </Box>
      );
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        {data.coords.latitude ? mapDisplay() : <Divider />}
      </Grid>
      <Grid container style={{marginTop: "18px"}}>
        <Grid item xs={12} md={6} style={styles.gridItem}>
          <Typography variant="h6" gutterBottom>
            Description:
          </Typography>
          <Typography data-cy="description" variant="body2" component="p" className={classes.text}>
            {data.description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={styles.gridItem}>
          <Typography variant="h6" gutterBottom>
            Contacts:
          </Typography>
          <Typography data-cy="contacts" variant="body2" component="p" style={styles.contacts} className={classes.text}>
            {data.telephone && `phone: ${data.telephone}\n`}
            {data.email && `email: ${data.email}\n`}
            {data.address && `address: ${data.address}\n`}
            {data.postcode && `postcode: ${data.postcode}\n`}
            {data.website && `website: ${data.website}\n`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ScreenSplit;

const styles = {
  gridItem: {
    padding: "10px",
  },
  map: {
    width: "100%",
    height: "300px",
    marginBottom: "20px",
  },
  contacts: {
    whiteSpace: "pre-wrap",
  },
};
