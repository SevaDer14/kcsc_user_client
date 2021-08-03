import axios from "axios";

const Search = {
  async create(searchQuery) {
    const response = await axios.post(`/search?q=${searchQuery}`)
    return response;
  },
  async index() {
    const response = await axios.get(`/services`)
    return response;
  },
};

export default Search;
