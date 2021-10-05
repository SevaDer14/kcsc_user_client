import React, { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Typography,
  FormControl,
} from "@material-ui/core";
import Inquiries from "../modules/Inquiries";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    [theme.breakpoints.up("xs")]: {
      padding: "0",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 50px",
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const { form } = useSelector((state) => state.appData.contact);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Inquiries.create(formData);
  };

  const saveToState = (event, dataKey) => {
    setFormData({
      ...formData,
      [dataKey]: event.target.value,
    });
  };

  const formElements = form.map((formField, index) => {
    let { dataKey, placeholder, type, required, multiline, rows } =
      formField;
    if (formField.type === "dropdown") {
      return (
        <FormControl
          key={`form-input-${index}`}
          variant="outlined"
        ></FormControl>
      );
    } else {
      return (
        <TextField
          key={`form-input-${index}`}
          onChange={(event) => saveToState(event, dataKey)}
          label={placeholder}
          data-cy={dataKey}
          type={type}
          required={required}
          multiline={multiline}
          rows={rows}
          variant="outlined"
          style={styles.formInput}
        />
      );
    }
  });

  return (
    <Box style={styles.formContainer} className={classes.formContainer}>
      <form
        data-cy="contact-form"
        style={styles.form}
        onSubmit={(event) => handleSubmit(event)}
      >
        {formElements}
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          data-cy="submit-button"
          style={styles.button}
        >
          <Typography variant="button" style={styles.buttonText}>
            Submit
          </Typography>
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;

const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "800px",
  },
  formInput: {
    margin: "10px",
    backgroundColor: "#fff",
  },
  button: {
    width: "200px",
    marginTop: "12px",
    alignSelf: "center",
  },
  buttonText: {
    marginBottom: "-5px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
};
