import axios from "axios";
import Functions from "./Functions";

const Inquiries = {
  async create(formData) {
    try {
      let params = { inquiry: formData }
      await axios.post(`/inquiries`, params)
      Functions.dispatchPopup(
        "success",
        "Thank you for your inquiry, we'll be in touch soon!"
      );
    } catch (error) {
      Functions.dispatchPopup(
        "error",
        "An error occurred during request, please try again"
      );
    }
  },
  async subscribe(email) {
    try {
      let params = { email: email }
      await axios.post(`/subscribe`, params)
      Functions.dispatchPopup(
        "success",
        "You've been successfully subscribed to KCSC!"
      );
    } catch (error) {
      Functions.dispatchPopup(
        "error",
        "An error occurred during request, please try again"
      );
    }
  },
};

export default Inquiries;
