const initialState = {
  services: [],
  serviceSearchResults: {},
  query: "",
  appDataFeched: false,
  messageOpen: false,
  messageType: "success",
  appData: {
    testimonials: [],
    navigation: {
      main_tabs: [],
      secondary_tabs: [],
    },
    contact: {
      form: [],
    },
  },
};

export default initialState;
