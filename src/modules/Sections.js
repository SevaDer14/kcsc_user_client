import axios from "axios";
import store from "../state/store/configureStore";

const Sections = {
  async index(view) {
    try {
      // const response = await axios.get(`/sections?view=${view}`);
      const response = await axios.get(`/sections?view=about_us`);
      return response.data.sections;
    } catch (e) {
      store.dispatch({ type: "SET_LAYOUT_LOAD_ERROR", payload: true });
    }
  },
};

export default Sections;
