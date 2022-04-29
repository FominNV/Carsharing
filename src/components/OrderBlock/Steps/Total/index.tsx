import { FC, ReactNode, useEffect, useMemo } from "react"
import { useTypedSelector } from "store/selectors"
import { useDispatch } from "react-redux"
import { setOrder } from "store/order/actions"
import { IOrder } from "store/order/types"
import { format } from "date-fns"
import dataServiceItems from "./data"

import "./styles.scss"

const Total: FC = () => {
  const { status, place, extra, date, price, car } = useTypedSelector((state) => state.order)
  const { cars } = useTypedSelector((state) => state.car)
  const { rate } = useTypedSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (
      status.new &&
      place.city &&
      place.street &&
      car &&
      extra &&
      extra.color &&
      date &&
      rate.current &&
      price
    ) {
      const dataOrder: IOrder = {
        orderStatusId: status.new,
        cityId: place.city,
        pointId: place.street,
        carId: car,
        color: extra.color,
        datefrom: date.from,
        dateTo: date.to,
        rateId: rate.current.rateTypeId.id,
        price,
        isFullTank: extra.isFullTank,
        isNeedChildChair: extra.isNeedChildChair,
        isRightWheel: extra.isRightWheel
      }

      dispatch(setOrder(dataOrder))
    }
  }, [status, car, rate, date, extra, place.city, place.street, price, dispatch])

  const addServices = useMemo<ReactNode>(
    () =>
      dataServiceItems.map((elem) => {
        if (extra && extra[elem.id]) {
          return (
            <div
              className="Total__item"
              key={elem.id}
            >
              {elem.title} <span className="Total__item_text-light">{elem.value}</span>
            </div>
          )
        }
        return false
      }),
    [extra]
  )

  const availableDate = useMemo<ReactNode>(
    () =>
      date && (
        <div className="Total__item">
          Доступна с{" "}
          <span className="Total__item_text-light">
            {format(new Date(date.from), "dd.MM.yyyy kk:mm")}
          </span>
        </div>
      ),
    [date]
  )

  const carNumber = useMemo<ReactNode>(
    () =>
      car?.number && (
        <div className="Total__car-number">
          {car?.number.replace(/(\d+)/g, " $1 ")}
        </div>
      ),
    [car]
  )

  const carImage = useMemo<ReactNode>(
    () =>
      car?.thumbnail.path && (
        <img
          src={car?.thumbnail.path}
          className="Total__car__img"
          alt="car_image"
        />
      ),
    [car]
  )

  return (
    <div className="Total">
      <div className="Total__car">
        <div className="Total__car__model">{car?.name}</div>
        {carImage}
      </div>
      {carNumber}
      {addServices}
      {availableDate}
    </div>
  )
}

export default Total
