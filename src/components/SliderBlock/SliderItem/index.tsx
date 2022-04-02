import React, { FC } from "react"
import { ButtonBorderRadius, ButtonColor } from "components/Button/types"
import Button from "components/Button"
import classNames from "classnames"

import { ISliderItemProps } from "./types"
import "./styles.scss"

const SliderItem: FC<ISliderItemProps> = ({ active, path, title, text, btnColor }) => {
  const itemClassName = classNames("SliderItem", { SliderItem_active: active })

  return (
    <div className={itemClassName}>
      <img src={path} alt="car" className="SliderItem__img" />

      <div className="SliderItem__content">
        <p className="SliderItem__title">{title}</p>
        <p className="SliderItem__text">{text}</p>

        <div className="SliderItem__btn">
          <Button
            name="Подробнее"
            bgColor={btnColor}
            color={ButtonColor.GRAY}
            borderRadius={ButtonBorderRadius.SMALL}
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(SliderItem)
