export interface IRateState {
  all: Nullable<IRate[]>
  current: Nullable<IRate>
  error: boolean
}

export interface IRate {
  price: number
  rateTypeId: {
    unit: string
    name: string
    id: string
  }
}

export type RateDispatch<T> = (value: T) => RateAction

export enum RateActionTypes {
  GET_RATES = "GET_RATES",
  SET_CURRENT_RATE = "SET_CURRENT_RATE",
  SET_RATE_ERROR = "SET_RATE_ERROR"
}

type GetRatesAction = {
  type: RateActionTypes.GET_RATES
  payload: { rates: Nullable<IRate[]>, error: boolean }
}

type SetCurrentRateAction = {
  type: RateActionTypes.SET_CURRENT_RATE
  payload: { rate: IRate }
}

type SetRateErrorAction = {
  type: RateActionTypes.SET_RATE_ERROR
  payload: { error: boolean }
}

export type RateAction = GetRatesAction | SetCurrentRateAction | SetRateErrorAction
