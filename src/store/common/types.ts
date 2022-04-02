export interface ICommonState {
  showMenu: boolean
  rusLang: boolean
  city: string
}

export enum CommonActionTypes {
  SET_LANGUAGE = "SET_LANGUAGE",
  SET_DISPLAY_MENU = "SET_DISPLAY_MENU"
}

export interface CommonDispatch<T> {
  (value: T): CommonAction
}

type SetLanguageAction = {
  type: CommonActionTypes.SET_LANGUAGE
  payload: { rusLang: boolean }
}

type SetDisplayMenuAction = {
  type: CommonActionTypes.SET_DISPLAY_MENU
  payload: { showMenu: boolean }
}

export type CommonAction = SetLanguageAction | SetDisplayMenuAction
