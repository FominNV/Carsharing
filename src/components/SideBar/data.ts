import { PATHS } from "routes/consts"
import { ISideBarButton } from "./types"

const dataSideBarButton: ISideBarButton[] = [
  {
    id: "place",
    name: "Выбрать модель",
    path: PATHS.ORDER_CAR
  },
  {
    id: "car",
    name: "Дополнительно",
    path: PATHS.ORDER_EXTRA
  },
  {
    id: "extra",
    name: "Итого",
    path: PATHS.ORDER_TOTAL
  },
  {
    id: "total",
    name: "Заказать",
    path: PATHS.ORDER_TOTAL
  }
]

export default dataSideBarButton
