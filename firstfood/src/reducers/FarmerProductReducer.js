import { LOAD_FARMERPRODUCT } from '../action/actionType'

function FarmerProductReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_FARMERPRODUCT':
      return [action.payload, ...state]
    case 'DEL_FARMERPRODUCT':
      return state.filter(item => item.id !== action.payload.id)
    case LOAD_FARMERPRODUCT:
      return action.payload.data
    default:
      return state
  }
}
export default FarmerProductReducer
