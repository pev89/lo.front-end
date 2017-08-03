import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import * as reducers from './reducers'

const rootReducers = combineReducers({
  ...reducers,
})

export default function configureStore() {
  return createStore(
    rootReducers,
    compose(
      applyMiddleware(
        thunkMiddleware,
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
      ),
    )
}
