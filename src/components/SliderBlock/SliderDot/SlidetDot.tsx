import { FC } from "react"
import { ISliderDotProps } from "./SliderDotTypes"

import dataSlider from "../../../content/data/dataSlider"

import "./SliderDot.scss"

const SliderDot: FC<ISliderDotProps> = ({ slideIndex, setSlideIndex }): JSX.Element => {
  const onclickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setSlideIndex(Number(e.currentTarget.dataset.key))
  }

  return (
    <div className="SliderDot">
      {Array.from({ length: dataSlider.length }).map((item, index) => (
        <button
          data-key={index + 1}
          onClick={onclickHandler}
          className={slideIndex === index + 1 ? "SliderDot__dot active" : "SliderDot__dot"}
        >
          {}
        </button>
      ))}
    </div>
  )
}

export default SliderDot