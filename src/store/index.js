import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeWithMiddleware = composeEnhancers(
  applyMiddleware(reduxThunk)
  )(createStore)

export default storeWithMiddleware(reducers)