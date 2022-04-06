import Place from "components/OrderBlock/Place"
import CarList from "components/OrderBlock/Car/CarList"
import Extra from "components/OrderBlock/Extra"
import Total from "components/OrderBlock/Total"
import { IOrderStep } from "./types"

const dataOrderSteps: IOrderStep[] = [
  {
    id: "place",
    component: <Place />
  },
  {
    id: "car",
    component: <CarList />
  },
  {
    id: "extra",
    component: <Extra />
  },
  {
    id: "total",
    component: <Total />
  }
]

export default dataOrderSteps
