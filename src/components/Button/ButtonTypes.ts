export enum ButtonBgColor {
  GREEN = "green",
  GREEN_DARK = "greenDark",
  DISABLE = "disable",
  CLOUDY = "cloudy",
  BROWN_RED = "brownRed",
  PURPLE = "purple"
}

export enum ButtonColor {
  WHITE = "white",
  GRAY = "gray"
}

export enum ButtonBorderRadius {
  SMALL = "small",
  MEDIUM = "medium"
}

export interface IButtonProps {
  name: string
  bgColor: ButtonBgColor
  color?: ButtonColor
  borderRadius?: ButtonBorderRadius
}
