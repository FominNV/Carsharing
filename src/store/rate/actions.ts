import useFetch from "hooks/useFetch"
import { FetchMethod, URLS } from "hooks/useFetch/types"
import { Dispatch } from "react"
import { IRate, RateAction, RateActionTypes, RateDispatch } from "./types"

export const getRates = () => async (dispatch: Dispatch<RateAction>) => {
  const { data, error, status500 } = await useFetch(URLS.RATE_URL, { method: FetchMethod.GET })

  if (error) {
    console.error("Can't get rates...")
  }

  if (status500) {
    dispatch({
      type: RateActionTypes.GET_RATES,
      payload: { rates: null, error: true }
    })
  } else {
    const fetchRates = data?.data as IRate[]
    const dataRates = fetchRates.filter((elem: IRate) => elem.rateTypeId)

    dispatch({
      type: RateActionTypes.GET_RATES,
      payload: { rates: dataRates, error: false }
    })
  }
}

export const setCurrentRate: RateDispatch<IRate> = (rate) => {
  return {
    type: RateActionTypes.SET_CURRENT_RATE,
    payload: { rate }
  }
}

export const setRateError: RateDispatch<boolean> = (error) => {
  return {
    type: RateActionTypes.SET_RATE_ERROR,
    payload: { error }
  }
}
