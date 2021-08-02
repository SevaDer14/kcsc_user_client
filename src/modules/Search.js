//import axios from "axios";
import search_results_football from '../data/fixtures/search_results_football.json'

const Search = {
  async create() {
  //async create(searchQuery) {
    //const response = await axios.get(`/search?q=${searchQuery}`);
    //return response;
    return search_results_football
  },
};

export default Search;
