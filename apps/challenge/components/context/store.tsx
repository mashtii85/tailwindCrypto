import React, { createContext, useEffect } from 'react'
import useReducerWithSideEffects from 'use-reducer-with-side-effects'
import { currencyReducer } from './reducers'

import { useRouter } from 'next/router'
// import {} from 'src/i18n'
import {
  ActionType,
  IAuthorizeContextProps as ICurrencyContextProps,
  ICurrencyState as ICurrencyState,
} from './variables'
import { Loading } from '../common'

export const authorizeInitState: ICurrencyState = {
  loading: false,
  currentState: ActionType.UNINITIALIZED,
  message: [],
}
const store = createContext({} as ICurrencyContextProps)
const { Provider } = store
// const { state } = useContext(store)
function AuthenticateProvider({
  children,
}: {
  children: JSX.Element
}): JSX.Element {
  const router = useRouter()
  const [state, dispatch] = useReducerWithSideEffects(
    currencyReducer,
    authorizeInitState,
  )
  useEffect(() => {
    dispatch({ type: ActionType.UNINITIALIZED })
  }, [])

  const switchRenderer = (currentState) => {
    switch (currentState) {
      case ActionType.LOADING:
        return <Loading />

      default:
        return <Loading />
    }
  }

  return (
    <Provider
      value={{
        state,
        dispatch,
        isAuthenticated: !state.currentState.AUTHORIZED,
      }}
    >
      {switchRenderer(state.currentState)}

    </Provider>
  )
}

export { store, AuthenticateProvider }
