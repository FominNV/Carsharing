import { OrderAction, OrderActionTypes } from "./types"

export const setPlaceCity = (city: string | null): OrderAction => {
  return {
    type: OrderActionTypes.SET_CITY,
    payload: { city }
  }
}

export const setPlaceStreet = (street: string | null): OrderAction => {
  return {
    type: OrderActionTypes.SET_STREET,
    payload: { street }
  }
}
