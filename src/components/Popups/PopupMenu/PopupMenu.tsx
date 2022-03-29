import { FC, ReactElement, ReactNode } from "react"
import dataPopupMenu from "../../../content/data/dataPopupMenu"

import "./PopupMenu.scss"

const PopupMenu: FC = (): JSX.Element => {
  const showAuthoutLinks = (data: ReactElement[]): ReactNode => {
    return data.map((elem: ReactElement, i: number) => (
      <a href="#" className="PopupMenu__auth_link" key={i}>
        {elem}
      </a>
    ))
  }

  const showLinks = (data: string[]): ReactNode => {
    return data.map((elem: string, i: number) => (
      <a href="#" className="PopupMenu__item" key={i}>
        {elem}
      </a>
    ))
  }

  return (
    <div className="PopupMenu">
      <div className="PopupMenu__links">{showLinks(dataPopupMenu.link)}</div>
      <div className="PopupMenu__auth">{showAuthoutLinks(dataPopupMenu.auth)}</div>
    </div>
  )
}

export default PopupMenu
