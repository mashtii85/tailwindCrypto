import { Dispatch } from 'react'

export interface ICurrencyAction<T> {
  type: ActionType
  payload?: T
}
export interface ICurrencyState {
  currentState: ActionType
  loading?: boolean
  message?: string[]

}
export interface IAuthorizeContextProps {
  isAuthenticated: boolean
  state: ICurrencyState
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<ICurrencyAction<any>>
}
export enum ActionType {
  UNINITIALIZED = 'UNINITIALIZED',
  GET_CURRENCIES='GET_CURRENCIES',
  GET_CURRENCY_LIST='GET_CURRENCY_LIST',
  LOADING = 'LOADING',
}
