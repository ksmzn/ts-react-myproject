import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import auth, { authActions } from './auth'

// Action
export const actions = {
  auth: authActions
}

// Reducer
const rootReducer = combineReducers({
  auth,
  router: routerReducer
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer

// utils

// Actions
interface Action<T extends string> {
  type: T
}
interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}
export function createAction<T extends string>(type: T): Action<T>
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload }
}

type FunctionType = (...args: any[]) => any
interface ActionCreatorsMapObject {
  [actionCreator: string]: FunctionType
}
export type ActionsUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>

// Normalizr
export interface Normalize<T> {
  byId: { [k: string]: T }
  allIds: string[]
}
