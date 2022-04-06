import { IOrderCar, OrderActionTypes, OrderDispatch, SetLockStepType } from "./types"

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

export const setOrderCar: OrderDispatch<Nullable<IOrderCar>> = (car) => {
  return {
    type: OrderActionTypes.SET_ORDER_CAR,
    payload: { car }
  }
}

export const setLockOrderStep: SetLockStepType = (step, lock) => {
  return {
    type: OrderActionTypes.SET_LOCK_STEP,
    payload: { step, lock }
  }
}
