import { FC } from "react"
import { IButtonProps } from "./ButtonTypes"

import "./Button.scss"

const Button: FC<IButtonProps> = ({ name, color, borderRadius, bgColor }) => {
  return (
    <button className={`Button ${color} ${borderRadius} ${bgColor}`}>
      <div className="Button__filter"></div>
      <div className="Button__name">{name}</div>
    </button>
  )
}

export default Button