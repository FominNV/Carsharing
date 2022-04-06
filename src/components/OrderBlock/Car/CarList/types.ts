import { ReactNode } from "react"
import { ICar } from "store/car/types"

export type ShowCarsType = (data: ICar[]) => ReactNode
export type LoadCarsType = () => Promise<void>
export type CreateRadioDataType = (data: ICar[]) => string[]
export type CreateRadiosType = (data: string[]) => ReactNode
