export interface IOrderState {
  place: {
    city: string | null
    street: string | null
  }
}

export enum OrderActionTypes {
  SET_CITY = "SET_CITY",
  SET_STREET = "SET_STREET"
}

type SetCityAction = {
  type: OrderActionTypes.SET_CITY
  payload: { city: string | null }
}

type SetStreetAction = {
  type: OrderActionTypes.SET_STREET
  payload: { street: string | null }
}

export type OrderAction = SetCityAction | SetStreetAction
