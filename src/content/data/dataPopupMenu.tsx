import { IDataPopupMenu } from "./dataTypes"

import { ReactComponent as Telegram } from "../icons/PopupMenu/telegram.svg"
import { ReactComponent as Facebook } from "../icons/PopupMenu/facebook.svg"
import { ReactComponent as Instagram } from "../icons/PopupMenu/instagram.svg"

const dataPopupMenu: IDataPopupMenu = {
  link: ["Парковка", "Страховка", "Бензин", "Обслуживание"],
  auth: [<Telegram />, <Facebook />, <Instagram />]
}

export default dataPopupMenu
