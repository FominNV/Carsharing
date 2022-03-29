import { FC } from "react"
import Container from "../Container/Container"

import { ReactComponent as Map } from "../../content/icons/Header/map.svg"

import "./Header.scss"

const Header: FC = (): JSX.Element => {
  return (
    <header className="Header">
      <Container>
        <div className="Header__content">
          <div className="Header__logo">Need for drive</div>

          <div className="Header__city">
            <Map />
            <div className="Header__city_name">Ульяновск</div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
