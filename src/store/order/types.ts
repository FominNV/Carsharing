export interface IOrderState {
  place: {
    city: Nullable<string>
    street: Nullable<string>
  }
}

export interface OrderDispatch<T> {
  (value: T): OrderAction
}

export enum OrderActionTypes {
  SET_CITY = "SET_CITY",
  SET_STREET = "SET_STREET"
}

type SetCityAction = {
  type: OrderActionTypes.SET_CITY
  payload: { city: Nullable<string> }
}

type SetStreetAction = {
  type: OrderActionTypes.SET_STREET
  payload: { street: Nullable<string> }
}

export type OrderAction = SetCityAction | SetStreetAction
