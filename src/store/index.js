import {createStore,combineReducers} from "redux"
import {cpimty} from "./reducer"
import {acx} from "./aabc"

let a = combineReducers({
    a:cpimty,
    b:acx
})

const store = createStore(a)
export default store
