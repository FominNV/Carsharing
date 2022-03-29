import { CommonAction, CommonActionTypes } from "../types"

export const setDisplayMenu = (bool: boolean): CommonAction => {
  return {
    type: CommonActionTypes.SET_DISPLAY_MENU,
    payload: { showMenu: bool }
  }
}
