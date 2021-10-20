import axios from "axios";
import Functions from "./Functions";

const CaseStudies = {
  async index() {
    try {
      const response = await axios.get(`/case_studies/`);
      return response.data.case_studies;
    } catch (e) {
      Functions.redirectToErrorPage();
    }
  },
};

export default CaseStudies;
