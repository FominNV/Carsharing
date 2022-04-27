import { IOrderState, OrderAction, OrderActionTypes } from "./types"

const initialState: IOrderState = {
  place: {
    city: null,
    street: null
  },
  car: null,
  extra: null,
  date: null,
  price: null,
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

    case OrderActionTypes.SET_ORDER_EXTRA:
      return {
        ...state,
        extra: action.payload.extra
      }

    case OrderActionTypes.SET_ORDER_DATE:
      return {
        ...state,
        date: action.payload.date
      }

    case OrderActionTypes.SET_ORDER_PRICE:
      return {
        ...state,
        price: action.payload.price
      }

    case OrderActionTypes.SET_LOCK_STEP:
      return {
        ...state,
        unlockedStep: {
          ...state.unlockedStep,
          [action.payload.key]: action.payload.lock
        }
      }

    default:
      return state
  }
}
