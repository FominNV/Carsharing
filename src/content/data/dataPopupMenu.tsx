import { IDataPopupMenu } from "./dataTypes"

import { ReactComponent as Ok } from "../icons/PopupMenu/ok.svg"
import { ReactComponent as Vk } from "../icons/PopupMenu/vk.svg"
import { ReactComponent as Tg } from "../icons/PopupMenu/telegram.svg"

const dataPopupMenu: IDataPopupMenu = {
  link: ["Парковка", "Страховка", "Бензин", "Обслуживание"],
  auth: [
    <Ok width={32} height={32} />,
    <Vk width={32} height={32} />,
    <Tg width={32} height={32} />
  ]
}

export default dataPopupMenu
