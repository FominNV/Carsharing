import { CommonActionTypes, CommonDispatch } from "../types"

export const setLoading: CommonDispatch<boolean> = (loading) => {
  return {
    type: CommonActionTypes.SET_LOADING,
    payload: { loading }
  }
}
