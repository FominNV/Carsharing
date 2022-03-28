import { FC } from "react"
import Button from "../Button/Button"
import { ButtonBgColor } from "../Button/ButtonTypes"
import OrderPoint from "../OrderBlock/OrderPoint/OrderPoint"

import "./SideBar.scss"

const SideBar: FC = (): JSX.Element => {
  return (
    <div className="SideBar">
      <h3 className="SideBar__title">Ваш заказ:</h3>
      <div className="SideBar__order-points"></div>
      <OrderPoint
        title="Пункт выдачи"
        value="Ульяновск,
          Нариманова&nbsp;42"
      />
      <p className="SideBar__total-price">Цена: от 8 000 до 12 000 ₽</p>
      <div className="SideBar__btn">
        <Button name="Выбрать модель" bgColor={ButtonBgColor.GREEN} disabled />
      </div>
    </div>
  )
}

export default SideBar
