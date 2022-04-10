import { FC, ReactNode, useCallback, useEffect, useMemo, useState } from "react"
import ReactLoading from "react-loading"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "store/selectors"
import { setLoading } from "store/common/actions/setLoading"
import { getCars } from "store/car/actions"
import OrderRadio from "components/OrderBlock/OrderRadio"

import { setLockOrderStep } from "store/order/actions"
import { CreateRadioDataType, CreateRadiosType, LoadCarsType, ShowCarsType } from "./types"
import CarCard from "../CarCard"

import "./styles.scss"

const CarList: FC = () => {
  const { car, common, order } = useTypedSelector((state) => state)
  const [filterCars, setFilterCars] = useState<string>("Все модели")
  const dispatch = useDispatch()

  const createRadioData = useCallback<CreateRadioDataType>((data) => {
    const result: string[] = []
    result.push("Все модели")
    data.map((elem) => {
      if (!result.includes(elem.categoryId.name)) {
        result.push(elem.categoryId.name)
      }
    })

    return result
  }, [])

  const createModelRadios = useCallback<CreateRadiosType>((data) =>
    data.map((elem, index) => (
      <OrderRadio
        id={`radio_car_${index}`}
        value={elem}
        key={`radio_car_${index}`}
        name="cars"
        checked={!index}
        setState={setFilterCars}
      />
    )), [])

  const modelRadios = useMemo<ReactNode>(
    () => car.cars.all && createModelRadios(createRadioData(car.cars.all)),
    [car.cars.all, createModelRadios, createRadioData]
  )

  const fetchCars = useCallback<LoadCarsType>(async () => {
    dispatch(setLoading(true))
    await dispatch(getCars())
    dispatch(setLoading(false))
  }, [dispatch])

  const showCars = useCallback<ShowCarsType>(
    (data) => {
      if (filterCars !== "Все модели") {
        return data
          .filter((elem) => elem.categoryId.name === filterCars)
          .map((elem, index) => (
            <CarCard
              id={elem.id}
              key={`carCard_${index}`}
              name={elem.name}
              priceMin={elem.priceMin}
              priceMax={elem.priceMax}
              img={elem.thumbnail.path}
            />
          ))
      }

      return data.map((elem, index) => (
        <CarCard
          id={elem.id}
          key={`carCard_${index}`}
          name={elem.name}
          priceMin={elem.priceMin}
          priceMax={elem.priceMax}
          img={elem.thumbnail.path}
        />
      ))
    },
    [filterCars]
  )

  const carList = useMemo<ReactNode | null>(
    () => car.cars.all && showCars(car.cars.all),
    [car.cars.all, showCars]
  )

  useEffect(() => {
    if (!car.cars.all) {
      fetchCars()
    }
  }, [fetchCars, car.cars.all])

  useEffect(() => {
    if (order.car) {
      dispatch(setLockOrderStep("extra", true))
    }
  }, [dispatch, order.car])

  const loading = useMemo(
    () =>
      common.loading && (
        <div className="CarList__loading">
          <ReactLoading
            type="spinningBubbles"
            color="green"
            height={36}
            width={36}
          />
        </div>
      ),
    [common.loading]
  )

  return (
    <div className="CarList">
      <fieldset
        name="cars"
        className="CarList__radios"
        defaultValue="all"
      >
        {modelRadios}
      </fieldset>

      <div className="CarList__cars">
        {carList}
        {loading}
      </div>
    </div>
  )
}

export default CarList
