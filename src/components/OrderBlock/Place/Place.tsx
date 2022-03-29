import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../store/selectors"
import { setPlaceCity, setPlaceStreet } from "../../../store/order/actions"
import { IDataSearchPlace } from "../../../content/data/dataTypes"
import OrderInput from "../OrderInput/OrderInput"

import map from "../../../content/images/Order/map.jpg"
import dataSearchPlace from "../../../content/data/dataSearchPlace"

import "./Place.scss"

const Place: FC = (): JSX.Element => {
  const { place } = useTypedSelector((state) => state.order)
  const [city, setCity] = useState<string | null>(null)
  const [street, setStreet] = useState<string | null>(null)

  const dispatch = useDispatch()

  const getCitiesFromData = (data: IDataSearchPlace[]): string[] => {
    return data.map((elem: IDataSearchPlace) => elem.city)
  }

  const getStreetsFromData = (
    data: IDataSearchPlace[],
    currentCity: string | null = null
  ): string[] => {
    const result: string[] = []

    if (currentCity) {
      return data
        .filter((elem: IDataSearchPlace) => elem.city === currentCity)
        .reduce((prev, current: IDataSearchPlace) => prev.concat(current.streets), result)
    }

    return data.reduce((prev, current: IDataSearchPlace) => prev.concat(current.streets), result)
  }

  const setPlaceByStreet = (value: string, data: IDataSearchPlace[]): void => {
    data.map((elem: IDataSearchPlace) => {
      if (elem.streets.includes(value)) {
        dispatch(setPlaceCity(elem.city))
        dispatch(setPlaceStreet(value))
      }
      return false
    })
  }

  useEffect(() => {
    if (street) {
      setPlaceByStreet(street, dataSearchPlace)
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
    if (place.city && place.city !== city) {
      setCity(place.city)
    }
  }, [city])

  return (
    <div className="Place">
      <div className="Place__inputs">
        <OrderInput
          label="Город"
          placeholder="Введите город"
          defaultValue={place.city}
          searchData={getCitiesFromData(dataSearchPlace)}
          setState={setCity}
        />
        <OrderInput
          label="Пункт выдачи"
          placeholder="Начните вводить пункт ..."
          defaultValue={place.street}
          searchData={
            city ? getStreetsFromData(dataSearchPlace, city) : getStreetsFromData(dataSearchPlace)
          }
          setState={setStreet}
        />
      </div>

      <div className="Place__map-wrap">
        <p className="Place__map-text">Выбрать на карте:</p>
        <img className="Place__map" src={map} alt="map" />
      </div>
    </div>
  )
}

export default Place
