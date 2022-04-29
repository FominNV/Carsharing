export interface ILocationState {
  cities: Nullable<ICity[]>
  points: Nullable<IPoint[]>
  error: boolean
}

export interface ICity {
  id: string
  name: string
}

export interface IPoint {
  name: string
  cityId: ICity
  address: string
  id: string
}

export type LocationDispatch<T> = (value: T) => LocationAction

export enum LocationActionTypes {
  GET_POINTS = 'GET_POINTS',
  SET_LOCATION_ERROR = 'SET_LOCATION_ERROR',
}

type GetPointsType = {
  type: LocationActionTypes.GET_POINTS
  payload: { points: Nullable<IPoint[]>; error: boolean }
}

type SetLocationErrorType = {
  type: LocationActionTypes.SET_LOCATION_ERROR
  payload: { error: boolean }
}

export type LocationAction = GetPointsType | SetLocationErrorType
