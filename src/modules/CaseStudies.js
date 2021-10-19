import axios from "axios";
import Functions from "./Functions";

const CaseStudies = {
  async index() {
    try {
      const response = await axios.get(`/case_studies/`);      
      return response.data.case_study;
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

export default CaseStudies;