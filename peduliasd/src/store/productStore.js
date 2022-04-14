import { productByIdReducer, productCreatedReducer, productListReducer } from "../reducers/productReducers";

export const productStore = {
    createProduct: productCreatedReducer,
    products: productListReducer,
    detailProduct: productByIdReducer
}