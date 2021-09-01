import axios from "axios";
import store from "../state/store/configureStore";

const Search = {
  async create(searchQuery, category) {
    try {
      store.dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: { loading: true },
      });
      const response = await axios.post(
        `/search?q=${searchQuery}&category=${category}`
      );
      store.dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: response.data,
      });
    } catch (error) {
      store.dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: [],
      });
    }
  },
  async index() {
    try {
      store.dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: { loading: true },
      });
      const response = await axios.get(`/services`);
      store.dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: response.data,
      });
    } catch (error) {
      store.dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: {
          error_message:
            "An error occurred during request, please try again later",
        },
      });
    }
  },
};

export default Search;
