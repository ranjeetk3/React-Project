import { createStore, applyMiddleware } from 'redux'
import createLoggerMiddleware from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import history from '../history'

// get the root reducer
import rootReducer from '../reducers/root'

// create the logger middleware
const loggerMiddleware = createLoggerMiddleware()

// create the router middleware
const routeMiddleware = routerMiddleware(history)

// export the store
// note that the logger middleware needs to be first
export default function configureStore(middleware) {
  return createStore(rootReducer, applyMiddleware(loggerMiddleware, routeMiddleware, middleware))
}
