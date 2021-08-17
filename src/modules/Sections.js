import axios from "axios";

const Sections = {
  async read(view) {
    try {
      const response = await axios.get(`/sections?view=${view}`);
      return response.data.sections;
    } catch (e) {
      store.dispatch({ type: "SET_LAYOUT_LOAD_ERROR", payload: true });
    }
  },
};

export default Sections;
