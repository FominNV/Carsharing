import { FC, useMemo } from "react"
import { useParams } from "react-router-dom"
import { useTypedSelector } from "store/selectors"
import { ButtonBgColor } from "components/Button/types"
import formatNumber from "hooks/formatNumber"
import Button from "components/Button"
import classNames from "classnames"
import { IOrderPlace } from "store/order/types"
import OrderPoint from "../OrderBlock/OrderPoint"
import dataSideBarButton from "./data"

import "./styles.scss"

const SideBar: FC = () => {
  const { order } = useTypedSelector((state) => state)
  const params = useParams()

  const orderPlace = useMemo<JSX.Element | null | "">(
    () => order.place.city && order.place.street && (
    <OrderPoint
      title="Пункт выдачи"
      value={`${order.place.city},`}
      noWrapValue={order.place.street}
    />
    ),
    [order.place.city, order.place.street]
  )

  const orderCar = useMemo<JSX.Element | null>(
    () => order.car && (
    <OrderPoint
      title="Модель"
      noWrapValue={order.car.name}
    />
    ),
    [order.car]
  )

  const price = useMemo(
    () => order.car && (
      <>
        <span className="SideBar__total-price_price">Цена: </span>
        {`от ${formatNumber(order.car.priceMin)} до ${formatNumber(order.car.priceMax)} ₽`}
      </>
    ),
    [order.car]
  )

  const orderButtons = useMemo<JSX.Element[]>(() => {
    return dataSideBarButton.map((elem, index) => {
      const buttonClassName = classNames(
        "SideBar__btn",
        { SideBar__btn_active: params.id === elem.id }
      )

      let disabled

      if (!index) {
        const place = order[elem.id] as IOrderPlace
        disabled = place.street === null
      } else {
        disabled = order[elem.id] === null
      }

      return (
        <div className={buttonClassName}>
          <Button
            name={elem.name}
            bgColor={ButtonBgColor.GREEN}
            disabled={disabled}
            key={elem.id + index}
            navigatePath={elem.path}
          />
        </div>
      )
    })
  }, [order, params.id])

  return (
    <div className="SideBar">
      <h3 className="SideBar__title">Ваш заказ:</h3>

      <div className="SideBar__order-points">
        {orderPlace}
        {orderCar}
      </div>

      <p className="SideBar__total-price">{price}</p>

      <div className="SideBar__btn-wrap">
        {orderButtons}
      </div>
    </div>
  )
}

export default SideBar
