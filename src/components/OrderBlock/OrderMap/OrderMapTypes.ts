import { Dispatch, SetStateAction } from "react"

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
  setState: Dispatch<SetStateAction<string | null>>
}
