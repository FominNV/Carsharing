import { CommonActionTypes, CommonDispatch, IError } from "./types"

export const setLanguage: CommonDispatch<boolean> = (rusLang) => {
  return {
    type: CommonActionTypes.SET_LANGUAGE,
    payload: { rusLang }
  }
}

export const showMenuPopup: CommonDispatch<boolean> = (menuPopup) => {
  return {
    type: CommonActionTypes.SHOW_MENU_POPUP,
    payload: { menuPopup }
  }
}

export const showOrderPopup: CommonDispatch<boolean> = (orderPopup) => {
  return {
    type: CommonActionTypes.SHOW_ORDER_POPUP,
    payload: { orderPopup }
  }
}

export const setLoading: CommonDispatch<boolean> = (loading) => {
  return {
    type: CommonActionTypes.SET_LOADING,
    payload: { loading }
  }
}

export const setError: CommonDispatch<Nullable<IError>> = (error) => {
  return {
    type: CommonActionTypes.SET_ERROR,
    payload: { error }
  }
}

export const setPageTitle: CommonDispatch<string> = (pageTitle) => {
  return {
    type: CommonActionTypes.SET_PAGE_TITLE,
    payload: { pageTitle }
  }
}
