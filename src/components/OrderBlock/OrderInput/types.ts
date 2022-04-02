import { Dispatch, ReactNode, SetStateAction } from "react"

export interface IOrderInputProps {
  id: string
  label: string
  value?: Nullable<string>
  defaultValue?: Nullable<string>
  placeholder?: string
  searchData?: string[]
  disabled?: boolean
  setState: Dispatch<SetStateAction<Nullable<string>>>
}

export type CreateDataBlock = (arg: string[]) => ReactNode
