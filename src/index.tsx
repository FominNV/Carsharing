import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom"
import { HelmetProvider } from "react-helmet-async"
import App from "./components/App/App"

import { store } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
