import axios from "axios";

const Requests = {
  async searchSelfCare(searchQuery) {
    const response = await axios.get(`/api/search?q=${searchQuery}`, {
      headers: { API_KEY: process.env.REACT_APP_API_KEY },
    });
    return response
  },
};

export default Requests;
