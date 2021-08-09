// import axios from "axios";
import news_view_articles from "../data/fixtures/news_view_articles.json";
import single_article from "../data/fixtures/single_article.json";
import testimonial_maggie_black from "../data/fixtures/testimonial_maggie_black.json";
import testimonial_richard_erricson from "../data/fixtures/testimonial_richard_erricson.json";

const Articles = {
  async index() {
    // const response = await axios.get(`/articles`);
    return news_view_articles.articles;
    //return response.data.articles;
  },
  async show(id) {
    //async show(id) {
    // const response = await axios.get(`/articles/${id}`);
    switch (id) {
      case "1":
        return single_article.article;
      case "2":
        return testimonial_maggie_black.article;
      case "3":
        return testimonial_richard_erricson.article;
      default:
        return;
    }

    //return response.data.article;
  },
};

export default Articles;
