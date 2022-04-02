import { FC } from "react"
import { useTypedSelector } from "store/selectors"
import { ButtonBgColor } from "components/Button/types"

import Button from "components/Button"
import OrderPoint from "../OrderBlock/OrderPoint"

import "./styles.scss"

const SideBar: FC = () => {
  const { place } = useTypedSelector((state) => state.order)

  const orderPlace = place.city && place.street && (
    <OrderPoint title="Пункт выдачи" firstValue={`${place.city},`} secondValue={place.street} />
  )

  return (
    <div className="SideBar">
      <h3 className="SideBar__title">Ваш заказ:</h3>

      <div className="SideBar__order-points">{orderPlace}</div>

      <p className="SideBar__total-price">
        <span className="SideBar__total-price_price">Цена: </span>от 8 000 до 12 000 ₽
      </p>

      <div className="SideBar__btn">
        <Button name="Выбрать модель" bgColor={ButtonBgColor.GREEN} disabled={!place.street} />
      </div>
    </div>
  )
}

export default SideBar
