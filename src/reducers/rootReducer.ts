import { combineReducers } from "redux"
import { appReducer, IAppState } from "./appReducer"

export interface IState {
  app: IAppState
}

export const rootReducer = combineReducers({ app: appReducer })
