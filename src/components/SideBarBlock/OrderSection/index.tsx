import { FC, ReactNode, useMemo } from "react"
import { useParams } from "react-router-dom"
import { useTypedSelector } from "store/selectors"
import OrderPoint from "components/OrderBlock/OrderPoint"
import Button from "components/Button"
import classNames from "classnames"
import { ButtonBgColor } from "components/Button/types"
import useFormatNumber from "hooks/useFormatNumber"
import dataOrderButtons from "./data"

import "./styles.scss"

const OrderSection: FC = () => {
  const { place, car, unlockedStep } = useTypedSelector((state) => state.order)
  const params = useParams()

  const orderPlace = useMemo<ReactNode>(() => {
    const city = place.city && place.city.name
    const street = place.street && place.street.address
    if (city && street) {
      return (
        <OrderPoint
          title="Пункт выдачи"
          key="order_place"
          value={`${city},`}
          noWrapValue={street || ""}
        />
      )
    }
    return null
  }, [place.city, place.street])

  const orderCar = useMemo<ReactNode>(() => {
    const carModel = car && car.name
    if (carModel) {
      return (
        <OrderPoint
          title="Модель"
          key="order_model"
          noWrapValue={carModel}
        />
      )
    }
    return null
  }, [car])

  const orderButtons = useMemo<ReactNode>(
    () =>
      dataOrderButtons.map((elem, index) => {
        const buttonClassName = classNames("SideBarSection__btn", {
          SideBarSection__btn_active: params.id === elem.id
        })
        const disabled = !unlockedStep[elem.unlockStep]

        return (
          <div
            className={buttonClassName}
            key={elem.id + index}
          >
            <Button
              name={elem.name}
              bgColor={ButtonBgColor.GREEN}
              disabled={disabled}
              key={elem.id + index}
              navigatePath={elem.path}
            />
          </div>
        )
      }),
    [params.id, unlockedStep]
  )

  const orderPrice = useMemo<ReactNode>(() => {
    const currentPrice = (
      car && `от ${useFormatNumber(car.priceMin)} до ${useFormatNumber(car.priceMax)} ₽`
    )

    if (currentPrice) {
      return (
        <>
          <span
            className="SideBarSection__total-price_price"
            key="order_price"
          >
            Цена:&nbsp;
          </span>
          {currentPrice}
        </>
      )
    }
    return null
  }, [car])

  return (
    <section className="SideBarSection">
      <div className="SideBarSection__order-points">
        {orderPlace}
        {orderCar}
      </div>

      <p className="SideBarSection__total-price">{orderPrice}</p>
      <div className="SideBarSection__btn-wrap">{orderButtons}</div>
    </section>
  )
}

export default OrderSection
