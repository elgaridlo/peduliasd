import axios from "axios"
import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, LIST_PRODUCT_FAIL, LIST_PRODUCT_REQUEST, LIST_PRODUCT_SUCCESS, PRODUCT_BY_ID_FAIL, PRODUCT_BY_ID_REQUEST, PRODUCT_BY_ID_SUCCESS } from "../constants/productConstants"

export const createProductAction = (payload) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_PRODUCT_REQUEST
        })

        const { userLogin: {userInfo} } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/product`,payload, config)

        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const listProductAction = () => async (dispatch) => {
    try {
        dispatch({
            type: LIST_PRODUCT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/product`, config)

        dispatch({
            type: LIST_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LIST_PRODUCT_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const getProductByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_BY_ID_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/product/${id}`, config)

        dispatch({
            type: PRODUCT_BY_ID_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_BY_ID_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}