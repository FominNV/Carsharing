import { CommonAction, CommonActionTypes } from "../types"

export const setLanguage = (bool: boolean): CommonAction => {
  return {
    type: CommonActionTypes.SET_LANGUAGE,
    payload: { rusLang: bool }
  }
}
