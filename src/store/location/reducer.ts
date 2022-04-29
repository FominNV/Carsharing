import { ILocationState, LocationAction, LocationActionTypes } from "./types"

const initialState: ILocationState = {
  cities: null,
  points: null,
  error: false
}

export function locationReducer(
  state: ILocationState = initialState,
  action: LocationAction
): ILocationState {
  switch (action.type) {
    case LocationActionTypes.GET_POINTS: {
      return {
        ...state,
        points: action.payload.points,
        error: action.payload.error
      }
    }

    case LocationActionTypes.SET_LOCATION_ERROR: {
      return {
        ...state,
        error: action.payload.error
      }
    }

    default:
      return state
  }
}
