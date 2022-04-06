import { FC } from "react"
import { IOrderPointProps } from "./types"

import "./styles.scss"

const OrderPoint: FC<IOrderPointProps> = ({ title, value, noWrapValue }) => (
  <div className="OrderPoint">
    <div className="OrderPoint__title">{title}</div>

    <div className="OrderPoint__dots" />

    <div className="OrderPoint__value">
      {value} <span className="OrderPoint__value_no-wrap">{noWrapValue}</span>
    </div>
  </div>
)

export default OrderPoint
