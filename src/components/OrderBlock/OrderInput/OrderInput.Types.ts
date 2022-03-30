import { Dispatch, SetStateAction } from "react"

export interface IOrderInputProps {
  label: string
  value?: string | null
  defaultValue?: string | null
  placeholder?: string
  searchData?: string[]
  setState: Dispatch<SetStateAction<string | null>>
}
