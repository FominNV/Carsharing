import useFetch from 'hooks/useFetch'
import { FetchMethod, URLS } from 'hooks/useFetch/types'
import { Dispatch } from 'react'
import { IPoint, LocationAction, LocationActionTypes, LocationDispatch } from './types'

export const getPoints = () => async (dispatch: Dispatch<LocationAction>) => {
  const { data, error, status500 } = await useFetch(URLS.POINT_URL, { method: FetchMethod.GET })

  if (error) {
    console.error("Can't get points...")
  }

  if (status500) {
    dispatch({
      type: LocationActionTypes.GET_POINTS,
      payload: { points: null, error: true }
    })
  } else {
    const dataPoints = data?.data as IPoint[]
    const fetchPoints = dataPoints.filter((elem: IPoint) => elem.cityId)

    dispatch({
      type: LocationActionTypes.GET_POINTS,
      payload: { points: fetchPoints, error: false }
    })
  }
}

export const setLocationError: LocationDispatch<boolean> = (error) => {
  return {
    type: LocationActionTypes.SET_LOCATION_ERROR,
    payload: { error }
  }
}
