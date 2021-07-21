import axios from "axios";

const Search = {
  async create(searchQuery) {
    const response = await axios.get(`/api/search?q=${searchQuery}`);
    return response;
  },
};

export default Search;
