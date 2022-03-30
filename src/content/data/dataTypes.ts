import { ReactElement } from "react"
import { ButtonBgColor } from "../../components/Button/ButtonTypes"

export interface IDataSlider {
  imgPath: string
  title: string
  text: string
  btnColor: ButtonBgColor
}

export interface IDataPopupMenu {
  link: string[]
  auth: ReactElement[]
}

export interface IBreadcrumb {
  title: string
  path: string
}

export interface IPlace {
  name: string
  coord: number[]
}

export interface IDataOrderPlace {
  city: IPlace
  streets: IPlace[]
}
