export enum ButtonBgColor {
  green = "green",
  greenDark = "greenDark",
  disable = "disable",
  cloudy = "cloudy",
  brownRed = "brownRed",
  purple = "purple",
}

export enum ButtonColor {
  white = "white",
  gray = "gray",
}

export enum ButtonBorderRadius {
  small = "small",
  medium = "medium",
}

export interface IButtonProps {
  name: string
  bgColor: ButtonBgColor
  color?: ButtonColor
  borderRadius?: ButtonBorderRadius
}
