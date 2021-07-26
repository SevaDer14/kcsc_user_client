import axios from "axios";

const Sections = {
  async read(page) {
    const response = await axios.get(`/sections?page=${page}`);
    return response.data.sections;
  },
};

export default Sections;
