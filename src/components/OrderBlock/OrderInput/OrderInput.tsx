import React, { FC, ReactNode, useEffect, useRef, useState } from "react"
import { IOrderInputProps } from "./OrderInput.Types"

import { ReactComponent as Clear } from "../../../content/icons/OrderInput/clear.svg"

import "./OrderInput.scss"

const OrderInput: FC<IOrderInputProps> = ({
  label,
  value,
  defaultValue,
  placeholder,
  searchData,
  setState
}): JSX.Element => {
  const [innerValue, setInnerValue] = useState<string>("")
  const [filteredData, setFilteredData] = useState<string[] | null>(null)
  const [showSearchBlock, setShowSearchBlock] = useState<boolean>(false)
  const input = useRef<HTMLInputElement | null>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInnerValue(e.currentTarget.value)
  }

  const clearInputValue = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setInnerValue("")
    setState(null)
    input.current?.focus()
  }

  const onMouseDownHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.name === "нет совпадений") {
      setShowSearchBlock(false)
      return
    }

    setInnerValue(e.currentTarget.name)
    setShowSearchBlock(false)
  }

  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>): void => {
    setShowSearchBlock(true)
  }

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>): void => {
    setState(innerValue)
    setShowSearchBlock(false)
  }

  const onKeypressHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setState(innerValue)
      setShowSearchBlock(false)
    }
  }

  const createDataBlock = (data: string[]): ReactNode => {
    return data.map((elem: string, i: number) => {
      return (
        <button
          className="OrderInput__data-block__btn"
          key={i}
          name={elem}
          onMouseDown={onMouseDownHandler}
        >
          {elem}
        </button>
      )
    })
  }

  const filterData = (data: string[]): string[] => {
    const filtered = data.filter((elem: string) => {
      return elem.toLowerCase().includes(innerValue.toLowerCase())
    })

    return filtered.length > 0 ? filtered : ["нет совпадений"]
  }

  useEffect(() => {
    if (value) {
      setInnerValue(value)
    } else if (value === null) {
      setInnerValue("")
    }
  }, [value])

  useEffect(() => {
    if (defaultValue) {
      setInnerValue(defaultValue)
    }
  }, [])

  useEffect(() => {
    if (innerValue && searchData) {
      setFilteredData(filterData(searchData))
    } else if (!innerValue && searchData) {
      setFilteredData(null)
    }
  }, [innerValue])

  return (
    <div className="OrderInput">
      <label className="OrderInput__label" htmlFor={label}>
        {label}
      </label>

      <div className="OrderInput__input-block">
        <input
          type="text"
          className="OrderInput__inp"
          value={innerValue}
          name={label}
          ref={input}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onKeyDown={onKeypressHandler}
        />

        <button
          className={`OrderInput__btn ${innerValue ? "OrderInput__btn_active" : ""}`}
          onClick={clearInputValue}
        >
          <Clear />
        </button>

        <div
          className={`OrderInput__data-block ${
            showSearchBlock ? "OrderInput__data-block_active" : ""
          }`}
        >
          {filteredData ? createDataBlock(filteredData) : searchData && createDataBlock(searchData)}
        </div>
      </div>
    </div>
  )
}

export default OrderInput
