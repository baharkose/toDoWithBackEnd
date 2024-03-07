import {legacy_createStore as createStore combineReducers } from "redux";
// ana kütüphaneden storeu ekledik.
import todoReducer from "../features/todoReducer";

// storeumuzu oluşturduk ve içerisine reducerımızı attık.
export const store = createStore(todoReducer)


// birden fazla reducer olsaydı eğer
// export const roorReducer = combineReducers({
//    ....
//     todoReducer
// })
