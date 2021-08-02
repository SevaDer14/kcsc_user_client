// import axios from "axios";
import news_view_articles from '../data/fixtures/news_view_articles.json'
import single_article from '../data/fixtures/single_article.json'


const Articles = {
  async index() {
    // const response = await axios.get(`/articles`);
    return news_view_articles.articles;
    //return response.data.articles;
  },
  async show() {
    //async show(id) {
    // const response = await axios.get(`/articles/${id}`);
    return single_article.article;
    //return response.data.article;
  },
};

export default Articles;