import { FC, ReactNode } from "react"
import { YMaps, Map, Placemark } from "react-yandex-maps"
import { IMarker, IOrderMapProps } from "./OrderMapTypes"

import marker from "../../../content/icons/OrderMap/marker.svg"

const OrderMap: FC<IOrderMapProps> = ({ mapState, markerData, setState }): JSX.Element => {
  const createMarker = (data: IMarker[]): ReactNode => {
    return data.map((elem, i: number) => (
      <Placemark
        geometry={elem.coord}
        onClick={() => setState(elem.name)}
        options={{
          iconLayout: "default#image",
          iconImageHref: marker,
          iconImageSize: [18, 18]
        }}
        key={i}
      />
    ))
  }

  return (
    <YMaps>
      <Map state={mapState} width="100%" height={320}>
        {createMarker(markerData)}
      </Map>
    </YMaps>
  )
}

export default OrderMap
