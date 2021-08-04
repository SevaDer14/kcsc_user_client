import axios from "axios";
import store from "../state/store/configureStore";

const Search = {
  async create(searchQuery) {
    const response = await axios.post(`/search?q=${searchQuery}`)
    store.dispatch({
      type: "SET_SEARCH_RESULTS",
      payload: response.data,
    });
  },
  async index() {
    const response = await axios.get(`/services`)
    store.dispatch({
      type: "SET_SEARCH_RESULTS",
      payload: response.data,
    });
  },
};

export default Search;
