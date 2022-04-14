import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REMOVE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, LIST_PRODUCT_FAIL, LIST_PRODUCT_REQUEST, LIST_PRODUCT_SUCCESS, PRODUCT_BY_ID_FAIL, PRODUCT_BY_ID_REQUEST, PRODUCT_BY_ID_SUCCESS } from "../constants/productConstants"

export const productCreatedReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_PRODUCT_REQUEST:
        return { loading: true }
      case CREATE_PRODUCT_SUCCESS:
        return { loading: false, newProduct: action.payload }
      case CREATE_PRODUCT_FAIL:
        return { loading: false, error: action.payload }
      case CREATE_PRODUCT_REMOVE:
        return {}
      default:
        return state
    }
  }

  export const productListReducer = (state = {}, action) => {
    switch (action.type) {
      case LIST_PRODUCT_REQUEST:
        return { loading: true }
      case LIST_PRODUCT_SUCCESS:
        return { loading: false, listProduct: action.payload.data }
      case LIST_PRODUCT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const productByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_BY_ID_REQUEST:
        return { loading: true }
      case PRODUCT_BY_ID_SUCCESS:
        return { loading: false, detail: action.payload.data }
      case PRODUCT_BY_ID_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }