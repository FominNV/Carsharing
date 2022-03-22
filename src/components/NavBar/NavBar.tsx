import { FC } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../store/selectors"
import { setLanguage } from "../../store/common/actions/setLanguage"
import { setDisplayMenu } from "../../store/common/actions/setDisplayMenu"

import { ReactComponent as Burger } from "../../content/icons/NavBar/menu_btn.svg"
import { ReactComponent as Close } from "../../content/icons/NavBar/close.svg"
import { ReactComponent as Eng } from "../../content/icons/NavBar/eng.svg"
import { ReactComponent as Rus } from "../../content/icons/NavBar/rus.svg"
import { ReactComponent as Circle } from "../../content/icons/NavBar/circle.svg"

import "./NavBar.scss"
import PopupMenu from "../Popups/PopupMenu/PopupMenu"

const NavBar: FC = (): JSX.Element => {
  const { showMenu, rusLang } = useTypedSelector((state) => state.common)
  const dispatch = useDispatch()

  const toggleLanguage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(setLanguage(!rusLang))
  }

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(setDisplayMenu(!showMenu))
  }

  return (
    <>
      {showMenu && <PopupMenu />}
      <nav className="NavBar">
        <button className={`NavBar__menu${showMenu ? "_active" : ""}`} onClick={toggleMenu}>
          {showMenu ? (
            <Close className="NavBar__menu_icon" />
          ) : (
            <Burger className="NavBar__menu_icon" />
          )}
        </button>

        <div className={`NavBar__lang${showMenu ? "_active" : ""}`}>
          <button className="NavBar__lang_btn" onClick={toggleLanguage}>
            <div className="NavBar__lang_name">{rusLang ? <Rus /> : <Eng />}</div>
            <div className="NavBar__lang_circle">
              <Circle />
            </div>
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar
