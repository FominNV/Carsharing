import { FC } from "react"
import OrderLayout from "../../layouts/OrderLayout/OrderLayout"
import Container from "../../components/Container/Container"
import SideBar from "../../components/SideBar/SideBar"
import Place from "../../components/OrderBlock/Place/Place"

import "./Order.scss"

const Order: FC = (): JSX.Element => {
  return (
    <OrderLayout>
      <div className="Order">
        <Container>
          <div className="Order__content">
            <main className="Order__main">
              <Place />
            </main>
            <SideBar />
          </div>
        </Container>
      </div>
    </OrderLayout>
  )
}

export default Order
