import axios from "axios";
import store from "../state/store/configureStore";
import Functions from './Functions'

const Search = {
  async create(searchQuery, category) {
    try {
      const response = await axios.post(`/search?q=${searchQuery}&category=${category}`);
      store.dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: response.data,
      });
    } catch (error) {
      Functions.dispatchPopup(
        "error",
        "An error occurred during request, please try again"
      );
    }
  },
  async index() {
    try {
      const response = await axios.get(`/services`);
      store.dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: response.data,
      });
    } catch (error) {
      Functions.dispatchPopup(
        "error",
        "An error occurred during request, please try again"
      );
    }
  },
};

export default Search;
