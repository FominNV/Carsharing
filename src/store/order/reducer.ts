import { IOrderState, OrderAction, OrderActionTypes } from "./types"

const initialState: IOrderState = {
  place: {
    city: null,
    street: null
  },
  car: null,
  extra: null,
  total: null,
  unlockedStep: {
    place: true,
    car: false,
    extra: false,
    total: false
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

    case OrderActionTypes.SET_ORDER_CAR:
      return {
        ...state,
        car: action.payload.car
      }

    case OrderActionTypes.SET_LOCK_STEP:
      return {
        ...state,
        unlockedStep: {
          ...state.unlockedStep,
          [action.payload.step]: action.payload.lock
        }
      }

    default:
      return state
  }
}
