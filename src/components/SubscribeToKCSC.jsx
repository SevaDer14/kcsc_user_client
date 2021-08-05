import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, OutlinedInput, Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Inquiries from "../modules/Inquiries";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    width: "100%",
    padding: "0 10px",
  },
  searchButton: {
    borderRadius: "0 5px 5px 0",
    height: "100%",
  },
  queryInput: {
    height: "50px",
    width: "100%",
    borderRadius: "5px 0 0 5px",
    backgroundColor: "white",
  },
}));

const SubscribeToKCSC = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Inquiries.subscribe(email);
  };

  return (
    <form data-cy="subscribe-to-kcsc" onSubmit={(event) => handleSubmit(event)}>
      <Grid container className={classes.searchBar}>
        <Grid item xs={10}>
          <OutlinedInput
            data-cy="input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            color="secondary"
            value={email}
            placeholder={"Email..."}
            aria-describedby="Subscribe to KCSC"
            className={classes.queryInput}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            data-cy="submit-button"
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.searchButton}
            disableElevation
          >
            <MailOutlineIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SubscribeToKCSC;
