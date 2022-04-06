import { FC, useEffect, useMemo } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useTypedSelector } from "store/selectors"
import OrderLayout from "layouts/OrderLayout"
import Container from "components/Container"
import SideBar from "components/SideBar"
import classNames from "classnames"
import { PATHS } from "routes/consts"
import dataOrderSteps from "./data"

import "./styles.scss"

const Order: FC = () => {
  const { place } = useTypedSelector((state) => state.order)
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()

  const orderSteps = useMemo<JSX.Element[]>(() => {
    return dataOrderSteps.map((elem, index) => {
      const blockClassName = classNames(
        "Order__step",
        { Order__step_active: params.id === elem.id }
      )

      return (
        <div
          className={blockClassName}
          key={elem.id + index}
        >
          {elem.component}
        </div>
      )
    })
  }, [params.id])

  useEffect(() => {
    if (location.pathname !== PATHS.ORDER_PLACE && !place.street) {
      navigate(PATHS.ORDER_PLACE)
    }
  }, [location.pathname, place.street, navigate])

  return (
    <OrderLayout title="NFS / Заказать">
      <div className="Order">
        <Container>
          <div className="Order__content">
            <main className="Order__main">
              {orderSteps}
            </main>

            <SideBar />
          </div>
        </Container>
      </div>
    </OrderLayout>
  )
}

export default Order
