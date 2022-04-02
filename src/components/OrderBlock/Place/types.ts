import { IMarker } from "../OrderMap/types"

export interface IPlace {
  name: string
  coord: number[]
}

export interface IDataOrderPlace {
  city: IPlace
  streets: IPlace[]
}

export type CreateMarkersData = () => IMarker[]
export type GetCitiesFromData = () => string[]
export type GetStreetsFromData = (currentCity?: Nullable<string>) => string[]
