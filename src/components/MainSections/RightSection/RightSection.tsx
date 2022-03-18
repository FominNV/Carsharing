import { FC } from "react"
import { IRightSectionProps } from "./RightSectionTypes"

import "./RightSection.scss"

const RightSection: FC<IRightSectionProps> = ({ children }): JSX.Element => {
  return <section className="RightSection">{children}</section>
}

export default RightSection
