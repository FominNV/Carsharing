import { Dispatch, ReactNode, SetStateAction } from "react"

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
  markerData: IMarker[]
  setState: Dispatch<SetStateAction<Nullable<string>>>
}

export type CreateMarkers = (data: IMarker[]) => ReactNode
