import Place from "components/OrderBlock/Steps/Place"
import Car from "components/OrderBlock/Steps/Car"
import { IOrderStep } from "./types"

export const dataOrderSteps: IOrderStep[] = [
  {
    id: "place",
    component: <Place />
  },
  {
    id: "car",
    component: <Car />
  }
]
