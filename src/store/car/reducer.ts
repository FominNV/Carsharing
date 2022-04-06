import { CarAction, CarActionTypes, ICarState } from "./types"

const initialState: ICarState = {
  cars: {
    all: null,
    filtered: null
  }
}

export function carReducer(state: ICarState = initialState, action: CarAction): ICarState {
  switch (action.type) {
    case CarActionTypes.GET_CARS:
      return {
        ...state,
        cars: { ...state.cars, all: action.payload.cars }
      }

    default:
      return state
  }
}
