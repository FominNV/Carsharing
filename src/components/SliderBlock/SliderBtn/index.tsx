import React, { FC, useCallback } from "react"
import classNames from "classnames"

import { ReactComponent as ArrowLeft } from "assets/icons/Slider/arrow-left.svg"
import { ReactComponent as ArrowRight } from "assets/icons/Slider/arrow-right.svg"
import { ISliderBtnProps } from "./types"

import "./styles.scss"

const SliderBtn: FC<ISliderBtnProps> = ({ direction, moveSlide }) => {
  const onClickHandler: MouseEventFunc<HTMLButtonElement> = useCallback(
    (e) => {
      moveSlide(e)
    },
    [moveSlide]
  )

  const btnClassName = classNames(
    "SliderBtn",
    { SliderBtn_next: direction === "next" },
    { SliderBtn_prev: direction === "prev" }
  )

  const icon = direction === "next" ? <ArrowRight /> : <ArrowLeft />

  return (
    <button onClick={onClickHandler} className={btnClassName}>
      {icon}
    </button>
  )
}

export default React.memo(SliderBtn)
