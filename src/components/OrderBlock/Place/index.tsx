import { FC, useCallback, useEffect, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "store/selectors"
import { setLockOrderStep, setOrderCar, setPlaceCity, setPlaceStreet } from "store/order/actions"
import { IMapState } from "components/OrderBlock/OrderMap/types"

import OrderInput from "components/OrderBlock/OrderInput"
import OrderMap from "components/OrderBlock/OrderMap"

import dataOrderPlace from "./data"

import "./styles.scss"

const Place: FC = () => {
  const { order, common } = useTypedSelector((state) => state)
  const [city, setCity] = useState<Nullable<string>>(order.place.city || common.city || null)
  const [street, setStreet] = useState<Nullable<string>>(order.place.street || null)
  const [mapState, setMapState] = useState<IMapState>({ center: [55.355198, 86.086847], zoom: 10 })

  const dispatch = useDispatch()

  const cityData = useMemo<string[]>(() => {
    return dataOrderPlace.map((elem) => elem.city.name)
  }, [])

  const streetData = useMemo<string[]>(() => {
    const array: string[] = []

    if (city) {
      return dataOrderPlace
        .filter((elem) => elem.city.name === city)
        .reduce((prev, current) => {
          return prev.concat(current.streets.map((elem) => elem.name))
        }, array)
    }

    return dataOrderPlace.reduce(
      (prev, current) => prev.concat(current.streets.map((elem) => elem.name)),
      array
    )
  }, [city])

  const setPlaceByStreet = useCallback<VoidFunc<string>>((currentStreet) => {
    dataOrderPlace.map((elem) => {
      elem.streets.map((item) => {
        if (item.name === currentStreet) {
          dispatch(setPlaceCity(elem.city.name))
          dispatch(setPlaceStreet(currentStreet))
        }
      })
    })
  }, [dispatch])

  const showCityOnMap = useCallback<VoidFunc<string>>((town) => {
    dataOrderPlace.map((elem) => {
      if (elem.city.name === town) {
        setMapState({ center: elem.city.coord, zoom: 10 })
      }
    })
  }, [])

  const showOrderPlaceOnMap = useCallback<VoidFunc<string>>((address) => {
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
      dispatch(setLockOrderStep('car', true))
    } else {
      dispatch(setPlaceStreet(null))
    }
  }, [street, dispatch, setPlaceByStreet, showOrderPlaceOnMap])

  useEffect(() => {
    if (!city) {
      dispatch(setPlaceCity(null))
      dispatch(setPlaceStreet(null))
    }
  }, [city, dispatch])

  useEffect(() => {
    if (city) {
      showCityOnMap(city)
    }
  }, [city, showCityOnMap])

  useEffect(() => {
    if (order.place.city && order.place.city !== city) {
      setCity(order.place.city)
    }
  }, [city, order.place.city])

  useEffect(() => {
    if (!order.place.street) {
      dispatch(setOrderCar(null))
      dispatch(setLockOrderStep('car', false))
      dispatch(setLockOrderStep('extra', false))
      dispatch(setLockOrderStep('total', false))
    }
  }, [dispatch, order.place.street])

  return (
    <div className="Place">
      <div className="Place__inputs">
        <OrderInput
          id="city"
          label="Город"
          placeholder="Введите город"
          value={order.place.city}
          defaultValue={common.city}
          data={cityData}
          setState={setCity}
        />
        <OrderInput
          id="street"
          label="Пункт выдачи"
          placeholder="Начните вводить пункт ..."
          value={order.place.street}
          data={streetData}
          setState={setStreet}
          disabled={!city}
        />
      </div>

      <div className="Place__map-wrap">
        <p className="Place__map-text">Выбрать на карте:</p>

        <div className="Place__map">
          <OrderMap
            mapState={mapState}
            data={dataOrderPlace}
            setState={setStreet}
          />
        </div>
      </div>
    </div>
  )
}

export default Place
