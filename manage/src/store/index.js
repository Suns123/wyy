import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import login from "./reducers/login"

const reducer = combineReducers({
    login
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;