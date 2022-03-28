import { FC, ReactNode } from "react"
import { useLocation, useNavigate, useParams, useRoutes } from "react-router-dom"
import dataBreadcrumbs from "../../content/data/dataBreadcrumbs"
import { IBreadcrumb } from "../../content/data/dataTypes"

import { ReactComponent as Triangle } from "../../content/icons/Breadcrumbs/triangle.svg"
import Container from "../Container/Container"

import "./Breadcrumbs.scss"

const Breadcrumbs: FC = (): JSX.Element => {
  const params = useParams()

  const createBreadcrumbs = (data: IBreadcrumb[]): ReactNode => {
    return data.map((elem: IBreadcrumb, i: number) => (
      <a
        href="#"
        className={`Breadcrumbs__item ${params.id === elem.path ? "Breadcrumbs__item_active" : ""}`}
        key={i}
      >
        {i > 0 && (
          <div className="Breadcrumbs__icon">
            <Triangle />
          </div>
        )}
        {elem.title}
      </a>
    ))
  }

  return (
    <div className="Breadcrumbs">
      <Container>
        <div className="Breadcrumbs__content">{createBreadcrumbs(dataBreadcrumbs)}</div>
      </Container>
    </div>
  )
}

export default Breadcrumbs
