import { FC } from "react"
import { Link } from "react-router-dom"
import Container from "../Container/Container"

import { ReactComponent as Map } from "../../content/icons/Header/map.svg"

import "./Header.scss"
import { useTypedSelector } from "../../store/selectors"

const Header: FC = (): JSX.Element => {
  const { city } = useTypedSelector((state) => state.common)

  return (
    <header className="Header">
      <Container>
        <div className="Header__content">
          <Link to="/carsharing" className="Header__logo">
            Need for drive
          </Link>

          <div className="Header__city">
            <Map />
            <div className="Header__city_name">{city}</div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
