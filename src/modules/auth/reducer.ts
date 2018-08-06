import { Action } from './actions'
import { ActionTypes, State } from './types'

export const initialState: State = {
  loading: false
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
