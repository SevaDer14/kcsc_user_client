import React, { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Typography,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Inquiries from "../modules/Inquiries";
import { useSelector } from "react-redux";

const RentOutForm = () => {
  const { form } = useSelector((state) => state.appData.contact);
  const [formData, setFormData] = useState({
    purpose: "",
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
    let { dataKey, placeholder, options, type, required, multiline, rows } =
      formField;
    if (formField.type === "dropdown") {
      return (
        <FormControl variant="outlined">
          <InputLabel data-cy={dataKey} style={{margin: "12px"}} htmlFor="form-dropdown">
            {placeholder}
          </InputLabel>
          <Select
            native
            value={formData.purpose}
            style={styles.formInput}
            onChange={(event) => saveToState(event, dataKey)}
            label={placeholder}
            inputProps={{
              name: { dataKey },
              id: "form-dropdown",
            }}
          >
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Select>
        </FormControl>
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
    <Box style={styles.formContainer}>
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

export default RentOutForm;

const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "800px",
    padding: "0 50px",
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
