import { FC } from "react"
import { IOrderLayoutProps } from "./OrderLayoutTypes"
import MainLayout from "../MainLayout/MainLayout"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"

import "./OrderLayout.scss"

const OrderLayout: FC<IOrderLayoutProps> = ({ children }): JSX.Element => {
  return (
    <MainLayout title="NFD / Заказать">
      <Breadcrumbs />
      {children}
    </MainLayout>
  )
}

export default OrderLayout
