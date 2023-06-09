import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productReducer";

const reudcers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
})

export default reudcers;