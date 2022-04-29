import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { useTypedSelector } from "store/selectors"
import Header from "components/Header"
import NavBar from "components/NavBar"
import classNames from "classnames"
import { IMainLayoutProps } from "./types"

import "./styles.scss"

const MainLayout: FC<IMainLayoutProps> = ({ children, title }) => {
  const { menuPopup } = useTypedSelector((state) => state.common)
  const mainLayoutClassname = classNames("MainLayout", {
    "MainLayout_scrollbar-none": menuPopup
  })
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className={mainLayoutClassname}>
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
