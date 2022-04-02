import React, { FC } from "react"
import { IButtonProps } from "./types"

import "./styles.scss"

const Button: FC<IButtonProps> = ({ name, color, borderRadius, bgColor, disabled }) => (
  <button className={`Button ${color} ${borderRadius} ${bgColor}`} disabled={disabled}>
    <div className="Button__filter" />
    <div className="Button__name">{name}</div>
  </button>
)

export default React.memo(Button)
