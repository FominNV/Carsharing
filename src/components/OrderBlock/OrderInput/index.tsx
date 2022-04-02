import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import classNames from "classnames"

import { ReactComponent as Clear } from "assets/icons/OrderInput/clear.svg"
import { CreateDataBlock, IOrderInputProps } from "./types"

import "./styles.scss"

const OrderInput: FC<IOrderInputProps> = ({
  id,
  label,
  value,
  defaultValue,
  placeholder,
  searchData,
  disabled,
  setState
}) => {
  const [innerValue, setInnerValue] = useState<string>("")
  const [filteredData, setFilteredData] = useState<string[] | null>(null)
  const [showDataBlock, setShowDataBlock] = useState<boolean>(false)
  const input = useRef<HTMLInputElement | null>(null)

  const onChangeHandler: ChangeEventFunc<HTMLInputElement> = (e) => {
    setInnerValue(e.currentTarget.value)
  }

  const clearInputValue: MouseEventFunc<HTMLButtonElement> = () => {
    setInnerValue("")
    setState(null)
    input.current?.focus()
  }

  const onMouseDownHandler: MouseEventFunc<HTMLButtonElement> = (e) => {
    if (e.currentTarget.name === "нет совпадений") {
      setShowDataBlock(false)
      return
    }

    setInnerValue(e.currentTarget.name)
    setShowDataBlock(false)
  }

  const onFocusHandler: FocusEventFunc<HTMLInputElement> = () => {
    setShowDataBlock(true)
  }

  const onBlurHandler: FocusEventFunc<HTMLInputElement> = () => {
    setState(innerValue)
    setShowDataBlock(false)
  }

  const onKeypressHandler: KeyboardEventFunc<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setState(innerValue)
      setShowDataBlock(false)
    }
  }

  const createDataBlock: CreateDataBlock = (data) => {
    return data.map((elem, index) => {
      return (
        <button
          className="OrderInput__data-block__btn"
          key={id + index}
          name={elem}
          onMouseDown={onMouseDownHandler}
        >
          {elem}
        </button>
      )
    })
  }

  const filterData: GenericFunc<string[]> = (data) => {
    const filtered = data.filter((elem) => {
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

  const btnClassName = classNames("OrderInput__btn", { OrderInput__btn_active: innerValue })
  const dataBlockClassName = classNames("OrderInput__data-block", {
    "OrderInput__data-block_active": showDataBlock
  })

  const dataList = filteredData
    ? createDataBlock(filteredData)
    : searchData && createDataBlock(searchData)

  return (
    <div className="OrderInput">
      <label className="OrderInput__label" htmlFor={id}>
        {label}
      </label>

      <div className="OrderInput__input-block">
        <input
          id={id}
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
          disabled={disabled}
        />

        <button className={btnClassName} onClick={clearInputValue}>
          <Clear />
        </button>

        <div className={dataBlockClassName}>{dataList}</div>
      </div>
    </div>
  )
}

export default React.memo(OrderInput)
