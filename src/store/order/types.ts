import { ICar } from 'store/car/types'

export interface IOrderState {
  place: IOrderPlace
  car: Nullable<ICar>
  date: Nullable<IOrderDate>
  extra: Nullable<IOrderExtra>
  price: Nullable<number>
  unlockedStep: IUnlockeOrderStep
}

export interface IOrderItem {
  name: string
  id: string
}

export interface IOrderPoint {
  address: string
  id: string
}

export interface IOrderDate {
  from: number
  to: number
}

export interface IOrderExtra {
  [index: string]: Nullable<string> | boolean
  color: string
  term: Nullable<string>
  tarrif: string
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
}

export interface IOrderPlace {
  city: Nullable<IOrderItem>
  street: Nullable<IOrderPoint>
}

export interface IUnlockeOrderStep {
  [index: string]: boolean
  place: boolean
  car: boolean
  extra: boolean
  total: boolean
}

export type OrderDispatch<T> = (value: T) => OrderAction
export type SetLockStepType = (
  key: keyof IUnlockeOrderStep,
  lock: boolean,
) => OrderAction

export enum OrderActionTypes {
  SET_CITY = 'SET_CITY',
  SET_STREET = 'SET_STREET',
  SET_ORDER_CAR = 'SET_ORDER_CAR',
  SET_ORDER_DATE = 'SET_ORDER_DATE',
  SET_ORDER_EXTRA = 'SET_ORDER_EXTRA',
  SET_ORDER_PRICE = 'SET_ORDER_PRICE',
  SET_LOCK_STEP = 'SET_LOCK_STEP',
}

type SetCityAction = {
  type: OrderActionTypes.SET_CITY
  payload: { city: Nullable<IOrderItem> }
}

type SetStreetAction = {
  type: OrderActionTypes.SET_STREET
  payload: { street: Nullable<IOrderPoint> }
}

type SetOrderCarAction = {
  type: OrderActionTypes.SET_ORDER_CAR
  payload: { car: Nullable<ICar> }
}

type SetOrderDateAction = {
  type: OrderActionTypes.SET_ORDER_DATE
  payload: { date: Nullable<IOrderDate> }
}

type SetOrderExtraAction = {
  type: OrderActionTypes.SET_ORDER_EXTRA
  payload: { extra: Nullable<IOrderExtra> }
}

type SetPriceAction = {
  type: OrderActionTypes.SET_ORDER_PRICE
  payload: { price: Nullable<number> }
}

type SetLockStepAction = {
  type: OrderActionTypes.SET_LOCK_STEP
  payload: { key: keyof IUnlockeOrderStep; lock: boolean }
}

export type OrderAction =
  | SetCityAction
  | SetStreetAction
  | SetOrderCarAction
  | SetLockStepAction
  | SetOrderDateAction
  | SetOrderExtraAction
  | SetPriceAction
