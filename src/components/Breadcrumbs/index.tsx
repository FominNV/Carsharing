import { FC } from "react"
import { useParams } from "react-router-dom"
import Container from "components/Container"
import classNames from "classnames"

import { ReactComponent as Triangle } from "assets/icons/Breadcrumbs/triangle.svg"
import dataBreadcrumbs from "./data"

import "./styles.scss"

const Breadcrumbs: FC = () => {
  const params = useParams()

  const links = dataBreadcrumbs.map((elem, index) => {
    const elemClassName = classNames("Breadcrumbs__item", {
      Breadcrumbs__item_active: params.id === elem.path
    })
    return (
      <a href="#" className={elemClassName} key={elem.id}>
        {elem.title}
        <div className="Breadcrumbs__icon">
          {index + 1 !== dataBreadcrumbs.length && <Triangle />}
        </div>
      </a>
    )
  })

  return (
    <div className="Breadcrumbs">
      <Container>
        <div className="Breadcrumbs__content">{links}</div>
      </Container>
    </div>
  )
}

export default Breadcrumbs
