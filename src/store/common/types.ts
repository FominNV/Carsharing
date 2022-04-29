export interface ICommonState {
  menuPopup: boolean
  rusLang: boolean
  loading: boolean
  city: string
  error: Nullable<IError>
}

export interface IError {
  number: number
  message: string
}

export enum CommonActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE',
  SHOW_MENU_POPUP = 'SHOW_MENU_POPUP',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export type CommonDispatch<T> = (value: T) => CommonAction

type SetLanguageAction = {
  type: CommonActionTypes.SET_LANGUAGE
  payload: { rusLang: boolean }
}

type ShowMenuPopupAction = {
  type: CommonActionTypes.SHOW_MENU_POPUP
  payload: { menuPopup: boolean }
}

type SetLoadingAction = {
  type: CommonActionTypes.SET_LOADING
  payload: { loading: boolean }
}

type SetErrorAction = {
  type: CommonActionTypes.SET_ERROR
  payload: { error: Nullable<IError> }
}

export type CommonAction =
  | SetLanguageAction
  | ShowMenuPopupAction
  | SetLoadingAction
  | SetErrorAction
