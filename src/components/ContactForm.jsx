import React, { useState } from "react";
import {
  TextField,
  Box,
  Button,
  FormControl,
  Typography
} from "@material-ui/core";
import Inquiries from "../modules/Inquiries";
import { useSelector } from "react-redux";

const RentOutForm = () => {
  const { form } = useSelector((state) => state.appData.contact);
  const [formData, setFormData] = useState({
    officeProvider: true,
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Inquiries.create(formData);
  };

  const saveToState = (event, dataKey) => {
    let data = formData;
    data[dataKey] = event.target.value;
    setFormData(data);
  };

  const formElements = form.map((formField, index) => {
    let { dataKey, text, type, required, multiline, rows } = formField;
    return (
      <TextField
        key={`form-input-${index}`}
        onChange={(event) => saveToState(event, dataKey)}
        label={text}
        data-cy={dataKey}
        type={type}
        required={required}
        multiline={multiline}
        rows={rows}
        variant="outlined"
        style={{ margin: "10px", backgroundColor: "#fff" }}
      />
    );
  });

  return (
    <Box style={styles.formContainer}>
      <FormControl
        data-cy="rent-out-form"
        onSubmit={(event) => handleSubmit(event)}
      >
        {formElements}
        <Button
          variant="contained"
          color="secondary"
          submit={true}
          data-cy="submit-button"
          style={styles.button}
        >
          <Typography variant="button" style={styles.buttonText}>
            Submit
          </Typography>
        </Button>
      </FormControl>
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
  button: {
    width: "200px",
    marginTop: "12px",
    alignSelf: "center"
  },
  buttonText: {
    marginBottom: "-5px",
  },
};
