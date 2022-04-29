export interface ICommonState {
  menuPopup: boolean
  orderPopup: boolean
  rusLang: boolean
  loading: boolean
  city: string
  error: Nullable<IError>
  pageTitle: string
}

export interface IError {
  number: number
  message: string
}

export enum CommonActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE',
  SHOW_MENU_POPUP = 'SHOW_MENU_POPUP',
  SHOW_ORDER_POPUP = "SHOW_ORDER_POPUP",
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_PAGE_TITLE = "SET_PAGE_TITLE"
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

type ShowOrderPopupAction = {
  type: CommonActionTypes.SHOW_ORDER_POPUP
  payload: { orderPopup: boolean }
}

type SetLoadingAction = {
  type: CommonActionTypes.SET_LOADING
  payload: { loading: boolean }
}

type SetErrorAction = {
  type: CommonActionTypes.SET_ERROR
  payload: { error: Nullable<IError> }
}

type SetPageTitleAction = {
  type: CommonActionTypes.SET_PAGE_TITLE
  payload: { pageTitle: string }
}

export type CommonAction =
  | SetLanguageAction
  | ShowMenuPopupAction
  | SetLoadingAction
  | SetErrorAction
  | ShowOrderPopupAction
  | SetPageTitleAction
