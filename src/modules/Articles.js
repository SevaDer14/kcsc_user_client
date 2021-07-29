import axios from "axios";

const Articles = {
  async index() {
    const response = await axios.get(`/articles`);
    return response.data.articles;
  },
};

export default Articles;