import { Dispatch, SetStateAction } from "react"
import { IDataOrderPlace } from "../Place/types"

export interface IMapState {
  center: number[]
  zoom: number
}

export interface IMarker {
  name: string
  coord: number[]
}

export interface IOrderMapProps {
  mapState: IMapState
  data: IDataOrderPlace[]
  setState: Dispatch<SetStateAction<Nullable<string>>>
}

export type CreateMarkersType = () => IMarker[]
