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
  },
  total: null,
  order: null,
  ordered: null,
  status: {
    all: null,
    new: null,
    confirm: null,
    cancel: null
  },
  error: false
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

    case OrderActionTypes.SET_ORDER:
      return {
        ...state,
        order: action.payload.order
      }

    case OrderActionTypes.SET_ORDERED:
      return {
        ...state,
        ordered: action.payload.ordered
      }

    case OrderActionTypes.POST_ORDER:
      return {
        ...state,
        ordered: action.payload.ordered,
        error: action.payload.error
      }

    case OrderActionTypes.GET_ORDER:
      return {
        ...state,
        ordered: action.payload.ordered,
        error: action.payload.error
      }

    case OrderActionTypes.GET_ORDER_STATUSES:
      return {
        ...state,
        status: { ...state.status, all: action.payload.statuses },
        error: action.payload.error
      }

    case OrderActionTypes.SET_ORDER_STATUS:
      return {
        ...state,
        status: { ...state.status, [action.payload.key]: action.payload.status }
      }

    case OrderActionTypes.SET_ORDER_ERROR:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}
