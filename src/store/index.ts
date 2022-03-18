import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "@redux-devtools/extension"
import { commonReducer } from "./common/reducer"

export type RootState = ReturnType<typeof combinedReducer>

const combinedReducer = combineReducers({
  common: commonReducer
})

const composeEnhancers = composeWithDevTools({})

export const store = createStore(combinedReducer, {}, composeEnhancers(applyMiddleware(thunk)))
