import { FC } from "react"

import { ReactComponent as Telegram } from "../../../content/icons/PopupMenu/telegram.svg"
import { ReactComponent as Facebook } from "../../../content/icons/PopupMenu/facebook.svg"
import { ReactComponent as Instagram } from "../../../content/icons/PopupMenu/instagram.svg"

import "./PopupMenu.scss"

const PopupMenu: FC = (): JSX.Element => {
  return (
    <div className="PopupMenu">
      <div className="PopupMenu__links">
        <a href="#" className="PopupMenu__item">
          Парковка
        </a>
        <a href="#" className="PopupMenu__item">
          Страховка
        </a>
        <a href="#" className="PopupMenu__item">
          Бензин
        </a>
        <a href="#" className="PopupMenu__item">
          Обслуживание
        </a>
      </div>
      <div className="PopupMenu__auth">
        <a href="#" className="PopupMenu__auth_link">
          <Telegram />
        </a>
        <a href="#" className="PopupMenu__auth_link">
          <Facebook />
        </a>
        <a href="#" className="PopupMenu__auth_link">
          <Instagram />
        </a>
      </div>
    </div>
  )
}

export default PopupMenu
