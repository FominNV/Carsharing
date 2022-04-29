import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "@redux-devtools/extension"
import { commonReducer } from "./common/reducer"
import { orderReducer } from "./order/reducer"
import { carReducer } from "./car/reducer"
import { locationReducer } from "./location/reducer"
import { rateReducer } from "./rate/reducer"

export type RootState = ReturnType<typeof combinedReducer>

const combinedReducer = combineReducers({
  common: commonReducer,
  order: orderReducer,
  car: carReducer,
  location: locationReducer,
  rate: rateReducer
})

const composeEnhancers = composeWithDevTools({})

export const store = createStore(combinedReducer, {}, composeEnhancers(applyMiddleware(thunk)))
