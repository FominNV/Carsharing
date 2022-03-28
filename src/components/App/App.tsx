import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import Main from "../../pages/Main/Main"
import Order from "../../pages/Order/Order"

import "./App.scss"

const App: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/carsharing" element={<Main />} />
      <Route path="/carsharing/order/:id" element={<Order />} />
    </Routes>
  )
}

export default App
