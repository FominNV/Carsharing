import { FC, useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "store/selectors"
import { setPlaceCity, setPlaceStreet } from "store/order/actions"
import { IMapState, IMarker } from "components/OrderBlock/OrderMap/types"

import OrderInput from "components/OrderBlock/OrderInput"
import OrderMap from "components/OrderBlock/OrderMap"

import dataOrderPlace from "./data"
import { CreateMarkersData, GetCitiesFromData, GetStreetsFromData } from "./types"

import "./styles.scss"

const Place: FC = () => {
  const { order, common } = useTypedSelector((state) => state)
  const [city, setCity] = useState<Nullable<string>>(common.city || null)
  const [street, setStreet] = useState<Nullable<string>>(null)
  const [mapState, setMapState] = useState<IMapState>({ center: [55.355198, 86.086847], zoom: 10 })

  const dispatch = useDispatch()

  const getCitiesFromData: GetCitiesFromData = useCallback(() => {
    return dataOrderPlace.map((elem) => elem.city.name)
  }, [])

  const getStreetsFromData: GetStreetsFromData = useCallback((currentCity): string[] => {
    const array: string[] = []

    if (currentCity) {
      return dataOrderPlace
        .filter((elem) => elem.city.name === currentCity)
        .reduce((prev, current) => {
          return prev.concat(current.streets.map((elem) => elem.name))
        }, array)
    }

    return dataOrderPlace.reduce(
      (prev, current) => prev.concat(current.streets.map((elem) => elem.name)),
      array
    )
  }, [])

  const createMarkersData: CreateMarkersData = useCallback(() => {
    const array: IMarker[] = []
    return dataOrderPlace.reduce(
      (prev, current) => prev.concat(current.streets.map((elem) => elem)),
      array
    )
  }, [])

  const setPlaceByStreet: VoidFunc<string> = useCallback((currentStreet) => {
    dataOrderPlace.map((elem) => {
      elem.streets.map((item) => {
        if (item.name === currentStreet) {
          dispatch(setPlaceCity(elem.city.name))
          dispatch(setPlaceStreet(currentStreet))
        }
      })
    })
  }, [])

  const showCityOnMap: VoidFunc<string> = useCallback((town) => {
    dataOrderPlace.map((elem) => {
      if (elem.city.name === town) {
        setMapState({ center: elem.city.coord, zoom: 10 })
      }
    })
  }, [])

  const showOrderPlaceOnMap: VoidFunc<string> = useCallback((address) => {
    dataOrderPlace.map((elem) => {
      elem.streets.map((item) => {
        if (item.name === address) {
          setMapState({ center: item.coord, zoom: 17 })
        }
      })
    })
  }, [])

  useEffect(() => {
    if (street) {
      setPlaceByStreet(street)
      showOrderPlaceOnMap(street)
    } else {
      dispatch(setPlaceStreet(null))
    }
  }, [street])

  useEffect(() => {
    if (!city) {
      dispatch(setPlaceCity(null))
      dispatch(setPlaceStreet(null))
    }
  }, [city])

  useEffect(() => {
    if (city) {
      showCityOnMap(city)
    }
  }, [city])

  useEffect(() => {
    if (order.place.city && order.place.city !== city) {
      setCity(order.place.city)
    }
  }, [city])

  const cityData = getCitiesFromData()
  const streetData = getStreetsFromData(city)
  const markers = createMarkersData()

  return (
    <div className="Place">
      <div className="Place__inputs">
        <OrderInput
          id="city"
          label="Город"
          placeholder="Введите город"
          value={order.place.city}
          defaultValue={common.city}
          searchData={cityData}
          setState={setCity}
        />
        <OrderInput
          id="street"
          label="Пункт выдачи"
          placeholder="Начните вводить пункт ..."
          value={order.place.street}
          searchData={streetData}
          setState={setStreet}
          disabled={!city}
        />
      </div>

      <div className="Place__map-wrap">
        <p className="Place__map-text">Выбрать на карте:</p>

        <div className="Place__map">
          <OrderMap mapState={mapState} markerData={markers} setState={setStreet} />
        </div>
      </div>
    </div>
  )
}

export default Place
