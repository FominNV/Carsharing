import { FC } from "react"
import { IOrderPointProps } from "./OrderPointTypes"

import "./OrderPoint.scss"

const OrderPoint: FC<IOrderPointProps> = ({ title, firstValue, secondValue }): JSX.Element => {
  return (
    <div className="OrderPoint">
      <div className="OrderPoint__title">{title}</div>

      <div className="OrderPoint__dots">
        <div className="OrderPoint__dots_content">
          .....................................................................
        </div>
      </div>

      <div className="OrderPoint__value">
        {firstValue} <span className="OrderPoint__value_no-wrap">{secondValue}</span>
      </div>
    </div>
  )
}

export default OrderPoint
