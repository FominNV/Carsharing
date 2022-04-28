import useFetch from "hooks/useFetch"
import { FetchMethod, URLS } from "hooks/useFetch/types"
import { Dispatch } from "react"
import { CarAction, CarActionTypes, CarDispatch, ICar, ICategory } from "./types"

export const getCars = () => async (dispatch: Dispatch<CarAction>) => {
  const { data, error, status500 } = await useFetch(URLS.CAR_URL, { method: FetchMethod.GET })

  if (error) {
    console.error("Can't get cars...")
  }

  if (status500) {
    dispatch({
      type: CarActionTypes.GET_CARS,
      payload: { cars: null, error: true }
    })
  } else {
    dispatch({
      type: CarActionTypes.GET_CARS,
      payload: { cars: data?.data as ICar[], error: false }
    })
  }
}

export const getCategories = () => async (dispatch: Dispatch<CarAction>) => {
  const { data, error, status500 } = await useFetch(URLS.CATEGORY_URL, { method: FetchMethod.GET })

  if (error) {
    console.error("Can't get categories...")
  }

  if (status500) {
    dispatch({
      type: CarActionTypes.GET_CATEGORIES,
      payload: { categories: null, error: true }
    })
  } else {
    dispatch({
      type: CarActionTypes.GET_CATEGORIES,
      payload: { categories: data?.data as ICategory[], error: false }
    })
  }
}

export const setCurrentCategory: CarDispatch<ICategory> = (current) => {
  return {
    type: CarActionTypes.SET_CURRENT_CATEGORY,
    payload: { current }
  }
}

export const setCarError: CarDispatch<boolean> = (error) => {
  return {
    type: CarActionTypes.SET_CAR_ERROR,
    payload: { error }
  }
}
