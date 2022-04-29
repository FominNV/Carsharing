import Place from "components/OrderBlock/Steps/Place"
import Car from "components/OrderBlock/Steps/Car"
import Extra from "components/OrderBlock/Steps/Extra"
import { IOrderStep } from "./types"

export const dataOrderSteps: IOrderStep[] = [
  {
    id: "place",
    component: <Place />
  },
  {
    id: "car",
    component: <Car />
  },
  {
    id: "extra",
    component: <Extra />
  }
]
