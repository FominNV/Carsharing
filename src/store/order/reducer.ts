import { IOrderState, OrderAction, OrderActionTypes } from "./types"

const initialState: IOrderState = {
  place: {
    city: null,
    street: null
  }
}

export function orderReducer(state: IOrderState = initialState, action: OrderAction): IOrderState {
  switch (action.type) {
    case OrderActionTypes.SET_CITY:
      return {
        ...state,
        place: { ...state.place, city: action.payload.city }
      }

    case OrderActionTypes.SET_STREET:
      return {
        ...state,
        place: { ...state.place, street: action.payload.street }
      }

    default:
      return state
  }
}
