import { FC } from "react"
import { IOrderPointProps } from "./types"

import "./styles.scss"

const OrderPoint: FC<IOrderPointProps> = ({ title, firstValue, secondValue }) => (
  <div className="OrderPoint">
    <div className="OrderPoint__title">{title}</div>

    <div className="OrderPoint__dots" />

    <div className="OrderPoint__value">
      {firstValue} <span className="OrderPoint__value_no-wrap">{secondValue}</span>
    </div>
  </div>
)

export default OrderPoint
