import React, { FC, useCallback } from "react"
import { YMaps, Map, Placemark, FullscreenControl } from "react-yandex-maps"

import marker from "assets/icons/OrderMap/marker.svg"
import { CreateMarkers, IOrderMapProps } from "./types"

const OrderMap: FC<IOrderMapProps> = ({ mapState, markerData, setState }) => {
  const createMarkers: CreateMarkers = useCallback((data) => {
    return data.map((elem, index) => (
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
  }, [])

  const placeMarkers = createMarkers(markerData)

  return (
    <YMaps>
      <Map state={mapState} width="100%" height={320}>
        <FullscreenControl />
        {placeMarkers}
      </Map>
    </YMaps>
  )
}

export default React.memo(OrderMap)
