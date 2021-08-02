import axios from "axios";
import store from '../state/store/configureStore'

const Inquiries = {
  async create(formData) {
    let params = { inquiry: formData }
    await axios.post(`/inquiries`, params)    
    const action = {
      type: 'SET_SUCCESS_MESSAGE',
      payload: "Thank you for your inquiry, we'll be in touch soon!"
    }
    store.dispatch(action)
  },
};

export default Inquiries;