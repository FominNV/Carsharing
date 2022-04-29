import { error } from "console"
import { CarAction, CarActionTypes, ICarState } from "./types"

const initialState: ICarState = {
  cars: {
    all: null
  },
  category: {
    all: null,
    current: null
  },
  error: false
}

export function carReducer(state: ICarState = initialState, action: CarAction): ICarState {
  switch (action.type) {
    case CarActionTypes.GET_CARS:
      return {
        ...state,
        cars: { ...state.cars, all: action.payload.cars },
        error: action.payload.error
      }

    case CarActionTypes.GET_CATEGORIES:
      return {
        ...state,
        category: { ...state.category, all: action.payload.categories },
        error: action.payload.error
      }

    case CarActionTypes.SET_CURRENT_CATEGORY:
      return {
        ...state,
        category: { ...state.category, current: action.payload.current }
      }

    case CarActionTypes.SET_CAR_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}
