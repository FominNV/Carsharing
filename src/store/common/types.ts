import { ICar } from "store/car/types"

export interface ICommonState {
  showMenu: boolean
  rusLang: boolean
  loading: boolean
  city: string
}
export interface CommonDispatch<T> {
  (value: T): CommonAction
}

export enum CommonActionTypes {
  SET_LANGUAGE = "SET_LANGUAGE",
  SET_DISPLAY_MENU = "SET_DISPLAY_MENU",
  SET_LOADING = "SET_LOADING"
}

export interface IFetchOptions {
  method: FetchMethod
  headers: {
    "X-Api-Factory-Application-Id": string
  }
}

export interface ICarFetchData {
  data: ICar[]
}

export interface IFetchState {
  data: Nullable<ICarFetchData>
  error: Nullable<Error>
}

export enum Urls {
  GET_CARS_URL = "https:///api-factory.simbirsoft1.com/api/db/car"
}

export enum FetchMethod {
  GET = "GET"
}

type SetLanguageAction = {
  type: CommonActionTypes.SET_LANGUAGE
  payload: { rusLang: boolean }
}

type SetDisplayMenuAction = {
  type: CommonActionTypes.SET_DISPLAY_MENU
  payload: { showMenu: boolean }
}

type SetLoadingAction = {
  type: CommonActionTypes.SET_LOADING
  payload: { loading: boolean }
}

export type CommonAction =
  | SetLanguageAction
  | SetDisplayMenuAction
  | SetLoadingAction
