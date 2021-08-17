import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Paper, Typography } from "@material-ui/core";

const MessageModal = () => {
  const { messageOpen, messageType, message } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Modal
      open={messageOpen}
      onClose={() => dispatch({ type: "CLOSE_MESSAGE" })}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Paper
        style={
          messageType === "error"
            ? { ...styles.modal, backgroundColor: "red" }
            : styles.modal
        }
      >
        <Typography
          id="modal-title"
          variant="h4"
          style={{ textTransform: "uppercase", marginBottom: "10px" }}
        >
          {messageType}
        </Typography>
        <Typography id="modal-description" data-cy="message" variant="h6">
          {message}
        </Typography>
      </Paper>
    </Modal>
  );
};

export default MessageModal;

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "400px",
    padding: "20px",
    border: "1px solid #000",
    borderRadius: "10px",
    backgroundColor: "limeGreen",
    color: "white",
  },
};
