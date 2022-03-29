import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import Main from "../../pages/Main/Main"

import "./App.scss"

const App: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default App
