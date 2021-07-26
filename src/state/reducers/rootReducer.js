import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        serviceSearchResults: action.payload.services,
        query: action.payload.query,
      };
    default:
      return state;
  }
};

export default rootReducer;
