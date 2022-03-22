import { FC } from "react"
import Button from "../../Button/Button"
import { ISliderItemProps } from "./SliderItemTypes"
import { ButtonBorderRadius, ButtonColor } from "../../Button/ButtonTypes"

import "./SliderItem.scss"

const SliderItem: FC<ISliderItemProps> = ({ active, path, title, text, btnColor }): JSX.Element => {
  return (
    <div className={`SliderItem${active ? "_active" : ""}`}>
      <img src={path} alt="car" className="SliderItem__img" />

      <div className="SliderItem__content">
        <p className="SliderItem__title">{title}</p>
        <p className="SliderItem__text">{text}</p>

        <div className="SliderItem__btn">
          <Button
            bgColor={btnColor}
            name="Подробнее"
            color={ButtonColor.GRAY}
            borderRadius={ButtonBorderRadius.SMALL}
          />
        </div>
      </div>
    </div>
  )
}

export default SliderItem
