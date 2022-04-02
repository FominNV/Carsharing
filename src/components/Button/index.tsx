import React, { FC } from "react"
import classNames from "classnames"
import { IButtonProps } from "./types"

import "./styles.scss"

const Button: FC<IButtonProps> = ({ name, color, borderRadius, bgColor, disabled }) => {
  const btnClassName = classNames("Button", color, borderRadius, bgColor)

  return (
    <button className={btnClassName} disabled={disabled}>
      <div className="Button__filter" />
      <div className="Button__name">{name}</div>
    </button>
  )
}

export default React.memo(Button)
