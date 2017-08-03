import { render } from 'react-dom'
import React from 'react'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import configureStore from './store'
import App from './containers/App'
import Welcome from './components/Welcome'
import Categories from './containers/Categories'
import socket from './socket'
import QuestionContainer from './containers/QuestionContainer'

const store = configureStore()
const containerEl = document.getElementById('main')
socket(store)

setTimeout(() => {
  render((
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome} />
          <Route path="categories" component={Categories}>
            <Route path=":category_id" />
          </Route>
          <Route path="questions" component={QuestionContainer}>
            <Route path=":question_id" />
          </Route>
        </Route>
      </Router>
    </Provider>
  ), containerEl)
}, 0)
