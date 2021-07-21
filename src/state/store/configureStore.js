import {createStore} from 'redux'
import rootReducer from '../reducers/rootReducer'
 
// store = createStore(rootReducer)
 
const configureStore = () => {
  return createStore(rootReducer)
}
 
export default configureStore;