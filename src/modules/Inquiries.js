//import axios from "axios";
import store from "../state/store/configureStore";

const Inquiries = {
  async create() {
    //async create(formData) {
    //let params = { inquiry: formData }
    //await axios.post(`/inquiries`, params)
    const action = {
      type: "SET_POPUP_MESSAGE",
      payload: {
        type: "success",
        message: "Thank you for your inquiry, we'll be in touch soon!",
      },
    };
    store.dispatch(action);
  },
  async subscribe() {
    //async subscribe(email) {
    //let params = { email: email }
    //await axios.post(`/subscribe`, params)
    const action = {
      type: "SET_POPUP_MESSAGE",
      payload: {
        type: "success",
        message: "You've been successfully subscribed to KCSC!",
      },
    };
    store.dispatch(action);
  },
};

export default Inquiries;
