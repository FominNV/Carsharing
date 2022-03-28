import React, { FC, ReactNode, useEffect, useState } from "react"
import { IOrderInputProps } from "./OrderInput.Types"

import { ReactComponent as Clear } from "../../../content/icons/OrderInput/clear.svg"

import "./OrderInput.scss"

const OrderInput: FC<IOrderInputProps> = ({
  label,
  placeholder,
  defaultValue,
  searchData
}): JSX.Element => {
  const [value, setValue] = useState<string>("")

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value)
  }

  const clearInputValue = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setValue("")
  }

  const createSearchBlock = (data: string[]): ReactNode => {
    return data.map((elem: string, i: number) => (
      <div className="OrderInput__search-block_item" key={i}>
        {elem}
      </div>
    ))
  }

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    }
  }, [])

  return (
    <div className="OrderInput">
      <label className="OrderInput__label" htmlFor={label}>
        {label}
      </label>

      <div className="OrderInput__input-block">
        <input
          type="text"
          className="OrderInput__inp"
          value={value}
          name={label}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />

        <button
          className={`OrderInput__btn ${value ? "OrderInput__btn_active" : ""}`}
          onClick={clearInputValue}
        >
          <Clear />
        </button>

        <div className="OrderInput__search-block">
          {searchData && createSearchBlock(searchData)}
        </div>
      </div>
    </div>
  )
}

export default OrderInput
