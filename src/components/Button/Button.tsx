import { FC } from "react"
import { IButtonProps } from "./ButtonTypes"

import "./Button.scss"

const Button: FC<IButtonProps> = ({ name, color, borderRadius, bgColor, disabled = false }) => {
  return (
    <button className={`Button ${color} ${borderRadius} ${bgColor}`} disabled={disabled}>
      <div className="Button__filter" />
      <div className="Button__name">{name}</div>
    </button>
  )
}

export default Button
