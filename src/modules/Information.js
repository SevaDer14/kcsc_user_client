import axios from "axios";
import Functions from './Functions'

const Information = {
  async index() {
    try {
    const response = await axios.get(`/information`);
    return response.data.information_items;
    } catch (e) {
      Functions.redirectToErrorPage()
    }
    
  },
};

export default Information;