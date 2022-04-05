import { CommonActionTypes, CommonDispatch } from "../types"

export const setDisplayMenu: CommonDispatch<boolean> = (showMenu) => {
  return {
    type: CommonActionTypes.SET_DISPLAY_MENU,
    payload: { showMenu }
  }
}
