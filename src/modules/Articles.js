import axios from "axios";

const Articles = {
  async index() {
    const response = await axios.get(`/articles`);
    return response.data.articles;
  },
  async show(id) {
    const response = await axios.get(`/articles/${id}`);
    return response.data.article;
  },
};

export default Articles;