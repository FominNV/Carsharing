import { FC, ReactNode, useState } from "react"
import SliderBtn from "../SliderBtn/SliderBtn"
import SliderDot from "../SliderDot/SlidetDot"
import SliderItem from "../SliderItem/SliderItem"

import dataSlider from "../../../content/data/dataSlider"
import { IDataSlider } from "../../../content/data/dataTypes"

import "./Slider.scss"
import { useTypedSelector } from "../../../store/selectors"

const Slider: FC = (): JSX.Element => {
  const { showMenu } = useTypedSelector((state) => state.common)
  const [slideIndex, setSlideIndex] = useState<number>(1)

  const nextSlide = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }

  const createSlides = (data: IDataSlider[]): ReactNode => {
    return data.map((elem: IDataSlider, index: number) => {
      return (
        <SliderItem
          index={index + 1}
          slideIndex={slideIndex}
          path={elem.imgPath}
          title={elem.title}
          text={elem.text}
          btnColor={elem.btnColor}
        />
      )
    })
  }

  return (
    <div className="Slider">
      {showMenu && <div className="Slider__popup"></div>}
      {createSlides(dataSlider)}

      <SliderBtn moveSlide={nextSlide} direction="next" />
      <SliderBtn moveSlide={prevSlide} direction="prev" />

      <SliderDot slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </div>
  )
}

export default Slider
