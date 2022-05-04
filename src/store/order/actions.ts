import useFetch from 'hooks/useFetch'
import { FetchMethod, URLS } from 'hooks/useFetch/types'
import { Dispatch } from 'react'
import { ICar } from 'store/car/types'
import {
  IOrder,
  IOrderDate,
  IOrdered,
  IOrderExtra,
  IOrderItem,
  IOrderPoint,
  IOrderStatus,
  OrderAction,
  OrderActionTypes,
  OrderDispatch,
  SetLockStepType,
  SetOrderStatusType
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

export const setLockOrderStep: SetLockStepType = (key, lock) => {
  return {
    type: OrderActionTypes.SET_LOCK_STEP,
    payload: { key, lock }
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

export const setOrder: OrderDispatch<Nullable<IOrder>> = (order) => {
  return {
    type: OrderActionTypes.SET_ORDER,
    payload: { order }
  }
}

export const setOrdered: OrderDispatch<Nullable<IOrdered>> = (ordered) => {
  return {
    type: OrderActionTypes.SET_ORDERED,
    payload: { ordered }
  }
}

export const postOrder = (fetchData: IOrder) => async (
  dispatch: Dispatch<OrderAction>
) => {
  const { data, error, status500 } = await useFetch(URLS.ORDER_URL, {
    method: FetchMethod.POST,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(fetchData)
  })

  if (error) {
    console.error("Can't post order...")
  }

  if (status500) {
    dispatch({
      type: OrderActionTypes.POST_ORDER,
      payload: { ordered: null, error: true }
    })
  } else {
    dispatch({
      type: OrderActionTypes.POST_ORDER,
      payload: { ordered: data?.data as IOrdered, error: false }
    })
  }
}

export const getOrder = (orderId: string) => async (
  dispatch: Dispatch<OrderAction>
) => {
  const url = URLS.ORDER_URL + orderId
  const { data, error, status500 } = await useFetch(url, {
    method: FetchMethod.GET
  })

  if (error) {
    console.error("Can't order...")
  }

  if (status500) {
    dispatch({
      type: OrderActionTypes.GET_ORDER,
      payload: { ordered: null, error: true }
    })
  } else {
    dispatch({
      type: OrderActionTypes.GET_ORDER,
      payload: { ordered: data?.data as IOrdered, error: false }
    })
  }
}

export const getOrderStatuses = () => async (
  dispatch: Dispatch<OrderAction>
) => {
  const { data, error, status500 } = await useFetch(URLS.ORDER_STATUS_URL, {
    method: FetchMethod.GET
  })

  if (error) {
    console.error("Can't get statuses...")
  }

  if (status500) {
    dispatch({
      type: OrderActionTypes.GET_ORDER_STATUSES,
      payload: { statuses: null, error: true }
    })
  } else {
    dispatch({
      type: OrderActionTypes.GET_ORDER_STATUSES,
      payload: { statuses: data?.data as IOrderStatus[], error: false }
    })
  }
}

export const setOrderStatus: SetOrderStatusType = (key, status) => {
  return {
    type: OrderActionTypes.SET_ORDER_STATUS,
    payload: { key, status }
  }
}

export const setOrderError: OrderDispatch<boolean> = (error) => {
  return {
    type: OrderActionTypes.SET_ORDER_ERROR,
    payload: { error }
  }
}
