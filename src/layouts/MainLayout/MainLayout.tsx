import { FC } from "react"
import Header from "../../components/Header/Header"
import NavBar from "../../components/NavBar/NavBar"
import { IMainLayoutProps } from "./MainLayoutTypes"

import "./MainLayout.scss"

const MainLayout: FC<IMainLayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className="MainLayout">
      <NavBar />

      <div className="MainLayout__content">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default MainLayout
