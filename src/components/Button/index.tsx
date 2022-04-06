import React, { FC, useCallback } from "react"
import { useNavigate } from "react-router-dom"

import classNames from "classnames"
import { IButtonProps } from "./types"

import "./styles.scss"

const Button: FC<IButtonProps> = ({
  name,
  color,
  borderRadius,
  bgColor,
  disabled,
  navigatePath
}) => {
  const navigate = useNavigate()

  const buttonClassName = classNames("Button", color, borderRadius, bgColor)

  const onClickHandler = useCallback<EventFunc<React.MouseEvent>>(() => {
    const path = navigatePath || ""
    navigate(path)
  }, [navigate, navigatePath])

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={onClickHandler}
    >
      <div className="Button__filter" />
      <div className="Button__name">{name}</div>
    </button>
  )
}

export default React.memo(Button)