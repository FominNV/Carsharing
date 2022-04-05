import { CommonAction, CommonActionTypes, ICommonState } from "./types"

const initialState: ICommonState = {
  showMenu: false,
  rusLang: false,
  city: "Новосибирск"
}

export function commonReducer(
  state: ICommonState = initialState,
  action: CommonAction
): ICommonState {
  switch (action.type) {
    case CommonActionTypes.SET_LANGUAGE:
      return {
        ...state,
        rusLang: action.payload.rusLang
      }

    case CommonActionTypes.SET_DISPLAY_MENU:
      return {
        ...state,
        showMenu: action.payload.showMenu
      }

    default:
      return state
  }
}
