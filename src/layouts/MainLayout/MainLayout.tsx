import { FC } from "react"
import { Helmet } from "react-helmet-async"
import Header from "../../components/Header/Header"
import NavBar from "../../components/NavBar/NavBar"
import { IMainLayoutProps } from "./MainLayoutTypes"

import "./MainLayout.scss"

const MainLayout: FC<IMainLayoutProps> = ({ children, title }): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="MainLayout">
        <NavBar />

        <div className="MainLayout__content">
          <Header />
          {children}
        </div>
      </div>
    </>
  )
}

export default MainLayout
