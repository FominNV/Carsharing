import { FC, MouseEvent, useCallback } from "react"
import { IOrderRadioProps } from "./types"

import "./styles.scss"

const OrderRadio: FC<IOrderRadioProps> = ({ id, value, name, checked, setState }) => {
  const onClickHandler = useCallback<EventFunc<MouseEvent>>(
    () => setState(value),
    [setState, value]
  )

  return (
    <label
      htmlFor={id}
      className="OrderRadio"
    >
      <input
        id={id}
        value={value}
        type="radio"
        className="OrderRadio__radio"
        defaultChecked={checked}
        name={name}
        onClick={onClickHandler}
      />

      <div className="OrderRadio__custom"></div>

      <p className="OrderRadio__text">{value}</p>
    </label>
  )
}

export default OrderRadio
