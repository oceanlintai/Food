import { combineReducers } from 'redux'
import { ADD_TODO, DEL_TODO, LOAD_TODO, LOAD_FARMERPRODUCT } from '../action/actionType'
import FarmerProductReducer from './FarmerProductReducer'
// action
// {type: 'ADD_TODO', payload: {id, title} }
// ADD_TODO
// DEL_TODO
// UPDATE_TODO
//

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state]
    case DEL_TODO:
      return state.filter(item => item.id !== action.payload.id)
    case LOAD_TODO:
      return action.payload.data
    default:
      return state
  }
}

export default combineReducers({
  todos,
  FarmerProductReducer,
})
