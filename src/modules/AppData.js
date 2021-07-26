import axios from "axios";
import store from '../state/store/configureStore'

const AppData = {
  async read() {
    const response = await axios.get('/app_data');
    store.dispatch({ type: "SET_APP_DATA", payload: response.data.app_data });
  },
};

export default AppData;
