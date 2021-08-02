// import axios from "axios";
import app_data from '../data/fixtures/app_data.json'
import store from "../state/store/configureStore";

const AppData = {
  async read() {
    // const response = await axios.get("/app_data");
    //store.dispatch({ type: "SET_APP_DATA", payload: response.data.app_data });
    store.dispatch({ type: "SET_APP_DATA", payload: app_data.app_data });

  },
};

export default AppData;
