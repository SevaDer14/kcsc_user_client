import axios from "axios";

const Sections = {
  async read(view) {
    const response = await axios.get(`/sections?view=${view}`);
    return response.data.sections;
  },
};

export default Sections;
