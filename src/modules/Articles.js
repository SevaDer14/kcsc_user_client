import axios from "axios";
import news_view_articles from "../data/fixtures/news_view_articles.json";
import single_article from "../data/fixtures/single_article.json";
import testimonial_maggie_black from "../data/fixtures/testimonial_maggie_black.json";
import testimonial_richard_erricson from "../data/fixtures/testimonial_richard_erricson.json";
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
