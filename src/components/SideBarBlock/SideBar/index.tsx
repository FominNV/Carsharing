import { FC } from "react"
import OrderSection from "../OrderSection"

import "./styles.scss"

const SideBar: FC = () => {
  return (
    <div className="SideBar">
      <h3 className="SideBar__title">Ваш заказ:</h3>
      <OrderSection />
    </div>
  )
}

export default SideBar
