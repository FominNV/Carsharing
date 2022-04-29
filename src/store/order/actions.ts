import { ICar } from 'store/car/types'
import {
  IOrderDate,
  IOrderExtra,
  IOrderItem,
  IOrderPoint,
  OrderActionTypes,
  OrderDispatch,
  SetLockStepType
} from './types'

export const setPlaceCity: OrderDispatch<Nullable<IOrderItem>> = (city) => {
  return {
    type: OrderActionTypes.SET_CITY,
    payload: { city }
  }
}

export const setPlaceStreet: OrderDispatch<Nullable<IOrderPoint>> = (
  street
) => {
  return {
    type: OrderActionTypes.SET_STREET,
    payload: { street }
  }
}

export const setOrderCar: OrderDispatch<Nullable<ICar>> = (car) => {
  return {
    type: OrderActionTypes.SET_ORDER_CAR,
    payload: { car }
  }
}

export const setOrderExtra: OrderDispatch<Nullable<IOrderExtra>> = (extra) => {
  return {
    type: OrderActionTypes.SET_ORDER_EXTRA,
    payload: { extra }
  }
}

export const setOrderPrice: OrderDispatch<Nullable<number>> = (price) => {
  return {
    type: OrderActionTypes.SET_ORDER_PRICE,
    payload: { price }
  }
}

export const setOrderDate: OrderDispatch<Nullable<IOrderDate>> = (date) => {
  return {
    type: OrderActionTypes.SET_ORDER_DATE,
    payload: { date }
  }
}

export const setLockOrderStep: SetLockStepType = (key, lock) => {
  return {
    type: OrderActionTypes.SET_LOCK_STEP,
    payload: { key, lock }
  }
}
