import { Component, ReactComponentElement, ReactElement, ReactSVG } from "react"
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

export interface IDataSearchPlace {
  city: string
  streets: string[]
}
