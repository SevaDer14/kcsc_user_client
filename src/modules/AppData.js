import axios from "axios";
import app_data from "../data/fixtures/app_data.json";
import store from "../state/store/configureStore";
import Functions from './Functions'

const AppData = {
  async read() {
    try {
      if (window.Cypress) {
        const response = await axios.get("/app_data");
        store.dispatch({
          type: "SET_APP_DATA",
          payload: response.data.app_data,
        });
      } else {
        store.dispatch({ type: "SET_APP_DATA", payload: app_data.app_data });
      }
    } catch (error) {
      Functions.redirectToErrorPage()
    }
  },
};

export default AppData;
