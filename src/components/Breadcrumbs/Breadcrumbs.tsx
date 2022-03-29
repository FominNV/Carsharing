import { FC, ReactNode } from "react"
import { useParams } from "react-router-dom"
import Container from "../Container/Container"
import { IBreadcrumb } from "../../content/data/dataTypes"

import dataBreadcrumbs from "../../content/data/dataBreadcrumbs"
import { ReactComponent as Triangle } from "../../content/icons/Breadcrumbs/triangle.svg"

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
        {elem.title}
        {i + 1 !== data.length && (
          <div className="Breadcrumbs__icon">
            <Triangle />
          </div>
        )}
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
