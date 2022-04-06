import { Dispatch } from "react"
import fetchAction from "store/common/actions/fetchAction"
import { ICarFetchData, Urls } from "store/common/types"
import { CarAction, CarActionTypes, ICar } from "./types"

export const getCars = () => async (dispatch: Dispatch<CarAction>) => {
  const { data, error } = await fetchAction(Urls.GET_CARS_URL)

  if (error) {
    throw new Error("Can't get cars...")
  }

  dispatch({
    type: CarActionTypes.GET_CARS,
    payload: { cars: data?.data as ICar[] }
  })
}
