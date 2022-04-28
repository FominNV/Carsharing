import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import Main from "pages/Main"
import Order from "pages/Order"
import Error from "pages/Error"

import "./styles.scss"

const App: FC = () => (
  <Routes>
    <Route
      path="/carsharing"
      element={<Main />}
    />
    <Route
      path="/carsharing/order/:id"
      element={<Order />}
    />
    <Route
      path="*"
      element={<Error />}
    />
  </Routes>
)

export default App
