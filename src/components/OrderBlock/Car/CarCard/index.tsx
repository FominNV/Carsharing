import { FC, MouseEvent, useCallback } from "react"
import { useTypedSelector } from "store/selectors"
import { useDispatch } from "react-redux"
import { setOrderCar } from "store/order/actions"

import classNames from "classnames"
import formatNumber from "hooks/formatNumber"
import { ICarCardProps } from "./types"

import "./styles.scss"

const CarCard: FC<ICarCardProps> = ({ id, name, priceMin, priceMax, img }) => {
  const { car } = useTypedSelector((state) => state.order)
  const dispatch = useDispatch()

  const setCar = useCallback<EventFunc<MouseEvent>>(() => {
    dispatch(setOrderCar({ id, name, priceMin, priceMax }))
  }, [dispatch, id, name, priceMin, priceMax])

  const cardClassName = classNames('CarCard', { CarCard_active: id === car?.id })
  const price = `${formatNumber(priceMin)} - ${formatNumber(priceMax)} ₽`

  return (
    <button
      className={cardClassName}
      onClick={setCar}
    >
      <div className="CarCard__text-wrap">
        <div className="CarCard__name">{name}</div>
        <div className="CarCard__price">{price}</div>
      </div>

      <div className="CarCard__img-wrap">
        <img
          src={img}
          alt="car"
          className="CarCard__img"
        />
      </div>
    </button>
  )
}

export default CarCard
