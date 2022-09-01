import { Update, UpdateWithSideEffect } from 'use-reducer-with-side-effects'
import {
  ActionType,
  ICurrencyAction,
  ICurrencyState,
} from './variables'

export const getToken = (
  state: ICurrencyState,
  action: ICurrencyAction<any>,
): ICurrencyState =>
  UpdateWithSideEffect(
    { ...state, loading: true },
    async (state: ICurrencyState, dispatch) => {
      // const response = await service.login(action.payload)
      // if (response.access_token) {
      //   decodeToken(response.access_token)

      //   action.payload.remember
      //     // ? localStorage.setItem(
      //     //     LocalStorageTypes.REMEMBER_ME,
      //     //     JSON.stringify(action.payload),
      //     //   )
      //     // : localStorage.removeItem(LocalStorageTypes.REMEMBER_ME)
      //   dispatch({
      //     // type: ActionType.AUTHORIZED,
      //     // payload: response,
      //   })
      // } else {
      //   // const message: IMessage = {
      //   //   text: 'نام کاربری یا کلمه عبور اشتباه است.  ',
      //   //   type: MessageType.FAILURE,
      //   // }

      //   // dispatch({
      //   //   type: ActionType.UNAUTHORIZED,
      //   //   payload:
      //   //     'نام کاربری یا کلمه عبور اشتباه است.  ' +
      //   //     new Date().toLocaleTimeString(),
      //   // })
      // }
    },
  )



export const uninitialized = (state: ICurrencyState): ICurrencyState =>
  UpdateWithSideEffect({ ...state, loading: true }, async (state, dispatch) => {
    // const response = getTokenFromLocalStorage()
    // if (response) {
    //   dispatch({
    //     type: ActionType.AUTHORIZED,
    //     payload: response,
    //   })
    // } else {
    //   dispatch({
    //     type: ActionType.UNAUTHORIZED,
    //     payload: response && response.message,
    //   })
    // }
  })

