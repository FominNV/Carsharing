import { OrderActionTypes, OrderDispatch } from "./types"

export const setPlaceCity: OrderDispatch<Nullable<string>> = (city) => {
  return {
    type: OrderActionTypes.SET_CITY,
    payload: { city }
  }
}

export const setPlaceStreet: OrderDispatch<Nullable<string>> = (street) => {
  return {
    type: OrderActionTypes.SET_STREET,
    payload: { street }
  }
}
