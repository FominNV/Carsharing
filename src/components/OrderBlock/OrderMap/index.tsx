import { FC, useCallback, useMemo } from "react"
import { YMaps, Map, Placemark, FullscreenControl, PlacemarkGeometry } from "react-yandex-maps"

import marker from "assets/icons/OrderMap/marker.svg"
import { CreateMarkersType, IMarker, IOrderMapProps } from "./types"

const OrderMap: FC<IOrderMapProps> = ({ mapState, data, setState }) => {
  const createMarkers = useCallback<CreateMarkersType>(() => {
    const array: IMarker[] = []
    return data.reduce(
      (prev, current) => prev.concat(current.streets.map((elem) => elem)),
      array
    )
  }, [data])

  const placeMarkers = useMemo<JSX.Element[]>(() => {
    return createMarkers().map((elem, index) => (
      <Placemark
        geometry={elem.coord}
        onClick={() => setState(elem.name)}
        options={{
          iconLayout: "default#image",
          iconImageHref: marker,
          iconImageSize: [18, 18],
          iconImageOffset: [-9, -9]
        }}
        key={`Placemark_${index}`}
      />
    ))
  }, [setState, createMarkers])

  return (
    <YMaps>
      <Map
        state={mapState}
        width="100%"
        height={320}
      >
        <FullscreenControl />
        {placeMarkers}
      </Map>
    </YMaps>
  )
}

export default OrderMap
