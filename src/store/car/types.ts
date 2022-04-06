export interface ICarState {
  cars: {
    all: Nullable<ICar[]>
    filtered: Nullable<ICar[]>
  }
}

export interface ICar {
  updatedAt: Date
  createdAt: Date
  description: string
  priceMin: number
  priceMax: number
  name: string
  number: string
  categoryId: {
    name: string
    description: string
    id: string
  }
  thumbnail: {
    size: number
    path: string
    originalname: string
    mimetype: string
  }
  tank: number
  colors: string[]
  id: string
}

export type CarDispatch<T> = (value: T) => CarAction

export enum CarActionTypes {
  GET_CARS = "GET_CARS"
}

type GetCarsAction = {
  type: CarActionTypes.GET_CARS
  payload: { cars: Nullable<ICar[]> }
}

export type CarAction = GetCarsAction
