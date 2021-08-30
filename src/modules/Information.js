import axios from "axios";
import information_items from '../data/fixtures/information_items.json'
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