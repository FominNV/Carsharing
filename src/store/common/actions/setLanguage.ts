import { CommonActionTypes, CommonDispatch } from "../types"

export const setLanguage: CommonDispatch<boolean> = (rusLang) => {
  return {
    type: CommonActionTypes.SET_LANGUAGE,
    payload: { rusLang }
  }
}
