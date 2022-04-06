export interface IOrderState {
  [index: string]:
    | IOrderPlace
    | Nullable<IOrderCar>
    | Nullable<IOrderExtra>
    | Nullable<IOrderTotal>
    | IUnlockeOrderStep
  place: IOrderPlace
  car: Nullable<IOrderCar>
  extra: Nullable<IOrderExtra>
  total: Nullable<IOrderTotal>
  unlockedStep: IUnlockeOrderStep
}

export interface IOrderPlace {
  city: Nullable<string>
  street: Nullable<string>
}

export interface IOrderCar {
  id: string
  name: string
  priceMin: number
  priceMax: number
}

export interface IOrderExtra {
  color: Nullable<string>
}

export interface IOrderTotal {
  order: Nullable<string>
}

export interface IUnlockeOrderStep {
  [index: string]: boolean
  place:boolean
  car: boolean
  extra: boolean
  total: boolean
}

export type OrderDispatch<T> = (value: T) => OrderAction
export type SetLockStepType = (step: keyof IUnlockeOrderStep, lock: boolean) => OrderAction

export enum OrderActionTypes {
  SET_CITY = "SET_CITY",
  SET_STREET = "SET_STREET",
  SET_ORDER_CAR = "SET_ORDER_CAR",
  SET_LOCK_STEP = "SET_LOCK_STEP"
}

type SetCityAction = {
  type: OrderActionTypes.SET_CITY
  payload: { city: Nullable<string> }
}

type SetStreetAction = {
  type: OrderActionTypes.SET_STREET
  payload: { street: Nullable<string> }
}

type SetCarAction = {
  type: OrderActionTypes.SET_ORDER_CAR
  payload: { car: Nullable<IOrderCar> }
}

type SetLockStepAction = {
  type: OrderActionTypes.SET_LOCK_STEP
  payload: { step: keyof IUnlockeOrderStep; lock: boolean }
}

export type OrderAction = SetCityAction | SetStreetAction | SetCarAction | SetLockStepAction
