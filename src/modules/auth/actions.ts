import { ThunkDispatch } from 'redux-thunk'
import { AuthRequest } from '../../libs/request'
import { RootState } from '../index'
import { ActionTypes, ActionUnion, createAction } from './types'

// Actions
export const actions = {
  login: () => createAction({ type: ActionTypes.LOGIN }),
  loginSuccess: () => createAction({ type: ActionTypes.LOGIN_SUCCESS }),
  loginFailure: () => createAction({ type: ActionTypes.LOGIN_FAILURE })
}

export type Action = ActionUnion<typeof actions>
export type Dispatch = ThunkDispatch<RootState, undefined, Action>

// Thunk Actions
export const thunkActions = {
  requestLogin: (id: string, password: string) => {
    return (dispatch: Dispatch) => {
      dispatch(actions.login())
      return AuthRequest.login(id, password)
        .then(_ => {
          dispatch(actions.loginSuccess())
        })
        .catch(error => {
          dispatch(actions.loginFailure())
          console.error(error)
        })
    }
  }
}

export const authActions = { ...actions, ...thunkActions }
