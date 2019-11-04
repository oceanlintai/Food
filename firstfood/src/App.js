import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import FirstFoodRoute from './FirstFoodRoute'
import TodoApp from './test/TodoApp'
import rootReducer from './reducers/index'
import { loadFarmerProductAsync } from './action/index'

// function createStore(reducer, preloadedState, enhancer) {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// store = {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
store.dispatch(loadFarmerProductAsync())

function App() {
  // console.log(store)
  return (
    <Provider store={store}>
      <FirstFoodRoute />
      {/*<TodoApp />*/}
    </Provider>
  )
}

export default App
