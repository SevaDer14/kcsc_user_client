import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return { ...state, serviceSearchResults: action.payload };
    case "SET_APP_DATA":
      return { ...state, testimonials: action.payload.testimonials };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
