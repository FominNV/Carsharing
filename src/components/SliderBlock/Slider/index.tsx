import React, { FC, useCallback, useState } from "react"
import { useTypedSelector } from "store/selectors"
import SliderBtn from "components/SliderBlock/SliderBtn"
import SliderDot from "components/SliderBlock/SliderDot"
import SliderItem from "components/SliderBlock/SliderItem"

import dataSlider from "./data"

import "./styles.scss"

const Slider: FC = () => {
  const { showMenu } = useTypedSelector((state) => state.common)
  const [slideIndex, setSlideIndex] = useState<number>(1)

  const nextSlide: MouseEventFunc<HTMLButtonElement> = useCallback(() => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }, [slideIndex])

  const prevSlide: MouseEventFunc<HTMLButtonElement> = useCallback(() => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }, [slideIndex])

  const slides = dataSlider.map((elem, index) => (
    <SliderItem
      active={index + 1 === slideIndex}
      key={`slide_${index}`}
      path={elem.imgPath}
      title={elem.title}
      text={elem.text}
      btnColor={elem.btnColor}
    />
  ))

  const popup = showMenu && <div className="Slider__popup" />

  return (
    <div className="Slider">
      {popup}
      {slides}

      <SliderBtn moveSlide={nextSlide} direction="next" />
      <SliderBtn moveSlide={prevSlide} direction="prev" />

      <SliderDot slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </div>
  )
}

export default Slider
