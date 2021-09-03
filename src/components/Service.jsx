import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Switch,
  FormControlLabel,
  Link,
} from "@material-ui/core";
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
  pcnSwitch: {
    margin: "8px auto 0 12px",
  },
}));

const ScreenSplit = ({ data }) => {
  const classes = useStyles();
  const [collapse, setCollapse] = useState(true);
  const [displayPcnBoundaries, setDisplayPcnBoundaries] = useState(false);

  const mapDisplay = () => {
    return (
      <Box component="div" style={collapse ? styles.mapClosed : styles.map}>
        <Button
          data-cy="toggle-map-visibility-button"
          size="small"
          color="secondary"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? "Show on map" : "Collapse Map"}
        </Button>
        {!collapse && (
          <>
            <Map
              coordinates={data.coords}
              displayPcnBoundaries={displayPcnBoundaries}
            />
            <FormControlLabel
              className={classes.pcnSwitch}
              control={
                <Switch
                  size="small"
                  checked={displayPcnBoundaries}
                  onChange={() =>
                    setDisplayPcnBoundaries(!displayPcnBoundaries)
                  }
                />
              }
              label={
                <Typography color="secondary" variant="body2">
                  Show PCN boundaries
                </Typography>
              }
            />
          </>
        )}
      </Box>
    );
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        {data.coords.latitude ? (
          mapDisplay()
        ) : (
          <Box component="div" style={collapse ? styles.mapClosed : styles.map}>
            <Button
              data-cy="toggle-map-visibility-button"
              size="small"
              disabled
              color="secondary"
              style={{ marginLeft: "auto" }}
              onClick={() => setCollapse(!collapse)}
            >
              {collapse ? "Show on map" : "Collapse Map"}
            </Button>
          </Box>
        )}
      </Grid>
      <Grid container style={{ marginTop: "18px" }}>
        <Grid item xs={12} md={6} style={styles.gridItem}>
          <Typography variant="h6" gutterBottom>
            Description:
          </Typography>
          <Typography
            data-cy="description"
            variant="body2"
            component="p"
            className={classes.text}
          >
            {data.description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={styles.gridItem}>
          <Typography variant="h6" gutterBottom>
            Contacts:
          </Typography>
          <Typography
            data-cy="contacts"
            variant="body2"
            component="p"
            style={styles.contacts}
            className={classes.text}
          >
            {data.telephone && `phone: ${data.telephone}\n`}
            {data.email && `email: ${data.email}\n`}
            {data.address && `address: ${data.address}\n`}
            {data.postcode && `postcode: ${data.postcode}\n`}
            Website:
            {data.website ? (
              <Link href={data.website} target="_blank">
                {" "}
                {data.website}
              </Link>
            ) : undefined}
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
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
    height: "300px",
    marginBottom: "40px",
  },

  mapClosed: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    height: "0px",
    marginBottom: "20px",
  },

  contacts: {
    whiteSpace: "pre-wrap",
  },
};
