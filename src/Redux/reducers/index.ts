import { combineReducers } from "redux";
import { cardReduser } from "./CardReduser";

export const rootReducer = combineReducers({
    card: cardReduser,
})

export type RootState = ReturnType<typeof rootReducer>