import { FC } from "react"
import { useTypedSelector } from "../../store/selectors"
import OrderPoint from "../OrderBlock/OrderPoint/OrderPoint"
import Button from "../Button/Button"
import { ButtonBgColor } from "../Button/ButtonTypes"

import "./SideBar.scss"

const SideBar: FC = (): JSX.Element => {
  const { place } = useTypedSelector((state) => state.order)

  return (
    <div className="SideBar">
      <h3 className="SideBar__title">Ваш заказ:</h3>

      <div className="SideBar__order-points">
        {place.city && place.street && (
          <OrderPoint title="Пункт выдачи" firstValue={place.city} secondValue={place.street} />
        )}
      </div>

      <p className="SideBar__total-price">Цена: от 8 000 до 12 000 ₽</p>

      <div className="SideBar__btn">
        <Button
          name="Выбрать модель"
          bgColor={ButtonBgColor.GREEN}
          disabled={place.street === null}
        />
      </div>
    </div>
  )
}

export default SideBar
