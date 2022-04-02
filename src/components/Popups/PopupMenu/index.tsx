import { FC } from "react"
import dataPopupMenu from "./data"

import "./styles.scss"

const PopupMenu: FC = () => {
  const links = dataPopupMenu.link.map((elem, index) => (
    <a href="#" className="PopupMenu__links__item" key={`auth_link_${index}`}>
      {elem}
    </a>
  ))

  const authLinks = dataPopupMenu.auth.map((elem, index) => (
    <a href="#" className="PopupMenu__auth__item" key={`item_${index}`}>
      {elem}
    </a>
  ))

  return (
    <div className="PopupMenu">
      <div className="PopupMenu__links">{links}</div>

      <div className="PopupMenu__auth">{authLinks}</div>
    </div>
  )
}

export default PopupMenu
