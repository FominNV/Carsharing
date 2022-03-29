import { FC } from "react"
import { ILeftSectionProps } from "./LeftSectionTypes"

import "./LeftSection.scss"

const LeftSection: FC<ILeftSectionProps> = ({ children }): JSX.Element => {
  return <section className="LeftSection">{children}</section>
}

export default LeftSection
