// import axios from "axios";
import information_items from '../data/fixtures/information_items.json'


const Information = {
  async index() {
    // const response = await axios.get(`/information`);
    return information_items;
    //return response.data.information_items;
  },
};

export default Information;