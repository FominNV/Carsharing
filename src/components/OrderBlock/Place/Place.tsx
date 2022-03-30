import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../store/selectors"
import { setPlaceCity, setPlaceStreet } from "../../../store/order/actions"
import { IDataOrderPlace, IPlace } from "../../../content/data/dataTypes"
import { IMapState, IMarker } from "../OrderMap/OrderMapTypes"
import OrderInput from "../OrderInput/OrderInput"
import OrderMap from "../OrderMap/OrderMap"

import dataOrderPlace from "../../../content/data/dataOrderPlace"

import "./Place.scss"

const Place: FC = (): JSX.Element => {
  const { order, common } = useTypedSelector((state) => state)
  const [city, setCity] = useState<string | null>(common.city ? common.city : null)
  const [street, setStreet] = useState<string | null>(null)
  const [mapState, setMapState] = useState<IMapState>({ center: [55.355198, 86.086847], zoom: 10 })

  const dispatch = useDispatch()

  const getCitiesFromData = (data: IDataOrderPlace[]): string[] => {
    return data.map((elem: IDataOrderPlace) => elem.city.name)
  }

  const getStreetsFromData = (
    data: IDataOrderPlace[],
    currentCity: string | null = null
  ): string[] => {
    const array: string[] = []

    if (currentCity) {
      return data
        .filter((elem: IDataOrderPlace) => elem.city.name === currentCity)
        .reduce((prev, current: IDataOrderPlace) => {
          return prev.concat(current.streets.map((elem) => elem.name))
        }, array)
    }

    return data.reduce(
      (prev, current: IDataOrderPlace) => prev.concat(current.streets.map((elem) => elem.name)),
      array
    )
  }

  const createMarkersData = (data: IDataOrderPlace[]): IMarker[] => {
    const array: IMarker[] = []
    return data.reduce(
      (prev, current: IDataOrderPlace) => prev.concat(current.streets.map((elem) => elem)),
      array
    )
  }

  const setPlaceByStreet = (currentStreet: string, data: IDataOrderPlace[]): void => {
    data.map((elem: IDataOrderPlace) => {
      elem.streets.map((item) => {
        if (item.name === currentStreet) {
          dispatch(setPlaceCity(elem.city.name))
          dispatch(setPlaceStreet(currentStreet))
        }
      })
    })
  }

  const showCityOnMap = (town: string, data: IDataOrderPlace[]): void => {
    data.map((elem) => {
      if (elem.city.name === town) {
        setMapState({ center: elem.city.coord, zoom: 10 })
      }
    })
  }

  const showOrderPlaceOnMap = (address: string, data: IDataOrderPlace[]): void => {
    data.map((elem: IDataOrderPlace) => {
      elem.streets.map((item: IPlace) => {
        if (item.name === address) {
          setMapState({ center: item.coord, zoom: 17 })
        }
      })
    })
  }

  useEffect(() => {
    if (street) {
      setPlaceByStreet(street, dataOrderPlace)
      showOrderPlaceOnMap(street, dataOrderPlace)
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
      showCityOnMap(city, dataOrderPlace)
    }
  }, [city])

  useEffect(() => {
    if (order.place.city && order.place.city !== city) {
      setCity(order.place.city)
    }
  }, [city])

  return (
    <div className="Place">
      <div className="Place__inputs">
        <OrderInput
          label="Город"
          placeholder="Введите город"
          value={order.place.city}
          defaultValue={common.city}
          searchData={getCitiesFromData(dataOrderPlace)}
          setState={setCity}
        />
        <OrderInput
          label="Пункт выдачи"
          placeholder="Начните вводить пункт ..."
          value={order.place.street}
          searchData={getStreetsFromData(dataOrderPlace, city)}
          setState={setStreet}
        />
      </div>

      <div className="Place__map-wrap">
        <p className="Place__map-text">Выбрать на карте:</p>

        <div className="Place__map">
          <OrderMap
            mapState={mapState}
            markerData={createMarkersData(dataOrderPlace)}
            setState={setStreet}
          />
        </div>
      </div>
    </div>
  )
}

export default Place
