import { ActionType, ICurrencyAction, ICurrencyState } from './variables'
import {
  uninitialized,
} from './actions'

export const currencyReducer = (
  state: ICurrencyState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: ICurrencyAction<any>,
): ICurrencyState => {
  switch (action.type) {
    case ActionType.UNINITIALIZED:
      return uninitialized(state)

    case ActionType.LOADING:
      return { ...state, loading: true }

    default:
      throw new Error()
  }
}
