import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return {...state, serviceSearchResults: action.payload}
    default:
      return state
  }
}

export default rootReducer
