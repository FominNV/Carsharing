import { FC } from "react"
import OrderLayout from "layouts/OrderLayout"
import Container from "components/Container"
import SideBar from "components/SideBar"
import Place from "components/OrderBlock/Place"

import "./styles.scss"

const Order: FC = () => (
  <OrderLayout title="NFS / Заказать">
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

export default Order
