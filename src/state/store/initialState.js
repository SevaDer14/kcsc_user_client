const initialState = {
  services: [],
  serviceSearchResults: {},
  query: "",
  appDataFeched: false,
  messageOpen: false,
  messageType: "Success",
  layoutLoadError: false,
  appData: {
    testimonials: [],
    navigation: {
      main_tabs: [],
      secondary_tabs: [],
    },    
    contact: {
      form: [],
    },
    about: "",
    disclamers: {}
  }
}

export default initialState;
