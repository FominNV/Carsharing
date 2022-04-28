import { IRateState, RateAction, RateActionTypes } from "./types"

const initialState: IRateState = {
  all: null,
  current: null,
  error: false
}

export function rateReducer(state: IRateState = initialState, action: RateAction): IRateState {
  switch (action.type) {
    case RateActionTypes.GET_RATES:
      return {
        ...state,
        all: action.payload.rates,
        error: action.payload.error
      }

    case RateActionTypes.SET_CURRENT_RATE:
      return {
        ...state,
        current: action.payload.rate
      }

    case RateActionTypes.SET_RATE_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}
