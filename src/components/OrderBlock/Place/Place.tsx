import { FC } from "react"
import OrderInput from "../OrderInput/OrderInput"

import map from "../../../content/images/Order/map.jpg"

import "./Place.scss"

const Place: FC = (): JSX.Element => {
  return (
    <div className="Place">
      <div className="Place__inputs">
        <OrderInput label="Город" defaultValue="Ульяновск" placeholder="Введите город" />
        <OrderInput label="Пункт выдачи" placeholder="Начните вводить пункт ..." />
      </div>
      <div className="Place__map-wrap">
        <p className="Place__map-text">Выбрать на карте:</p>
        <img className="Place__map" src={map} alt="map" />
      </div>
    </div>
  )
}

export default Place
