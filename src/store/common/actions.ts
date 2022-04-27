import { CommonActionTypes, CommonDispatch } from "./types"

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

export const setLoading: CommonDispatch<boolean> = (loading) => {
  return {
    type: CommonActionTypes.SET_LOADING,
    payload: { loading }
  }
}
