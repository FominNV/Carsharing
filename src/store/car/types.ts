export interface ICarState {
  cars: {
    all: Nullable<ICar[]>
  }
  category: {
    all: Nullable<ICategory[]>
    current: Nullable<ICategory>
  }
  error: boolean
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

export interface ICategory {
  name: string
  description: string
  id: string
}

export type CarDispatch<T> = (value: T) => CarAction

export enum CarActionTypes {
  GET_CARS = "GET_CARS",
  GET_CATEGORIES = "GET_CATEGORIES",
  SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY",
  SET_CAR_ERROR = "SET_CAR_ERROR"
}

type GetCarsAction = {
  type: CarActionTypes.GET_CARS
  payload: { cars: Nullable<ICar[]>, error: boolean }
}

type GetCategoriesAction = {
  type: CarActionTypes.GET_CATEGORIES
  payload: { categories: Nullable<ICategory[]>, error: boolean }
}

type SetCurrentCategoryAction = {
  type: CarActionTypes.SET_CURRENT_CATEGORY
  payload: { current: ICategory }
}

type SetCarErrorAction = {
  type: CarActionTypes.SET_CAR_ERROR
  payload: { error: boolean }
}

export type CarAction =
  | GetCarsAction
  | GetCategoriesAction
  | SetCurrentCategoryAction
  | SetCarErrorAction
