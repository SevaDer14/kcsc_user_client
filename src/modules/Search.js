import axios from "axios";
import store from "../state/store/configureStore";

const Search = {
  async create(searchQuery) {
    try {
      const response = await axios.post(`/search?q=${searchQuery}`);
      store.dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: response.data,
      });
    } catch (error) {
      dispatchError();
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
      dispatchError();
    }
  },
};

export default Search;

const dispatchError = () => {
  store.dispatch({
    type: "SET_POPUP_MESSAGE",
    payload: {
      type: 'error',
      message: "An error occurred during request, please try again"},
  });
};
