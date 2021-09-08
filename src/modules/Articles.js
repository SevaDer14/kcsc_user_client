import axios from "axios";
import Functions from "./Functions";

const Articles = {
  async index() {
    try {
      const response = await axios.get(`/articles`);      
      return response.data.articles;
    } catch (e) {
      Functions.redirectToErrorPage();
    }
  },
  async show(id) {
    try {
      const response = await axios.get(`/articles/${id}`);
      return response.data.article;
    } catch (e) {
      Functions.redirectToErrorPage();
    }
  },
};

export default Articles;