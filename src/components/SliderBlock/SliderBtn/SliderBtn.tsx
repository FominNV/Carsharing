import { FC } from "react"
import { ISliderBtnProps } from "./SliderBtnTypes"

import { ReactComponent as ArrowLeft } from "../../../content/icons/Slider/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../../content/icons/Slider/arrow-right.svg"

import "./SliderBtn.scss"

const SliderBtn: FC<ISliderBtnProps> = ({ direction, moveSlide }): JSX.Element => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    moveSlide(e)
  }

  return (
    <button
      onClick={onClickHandler}
      className={`SliderBtn ${direction === "next" ? "next" : "prev"}`}
    >
      {direction === "next" ? <ArrowRight /> : <ArrowLeft />}
    </button>
  )
}

export default SliderBtn
