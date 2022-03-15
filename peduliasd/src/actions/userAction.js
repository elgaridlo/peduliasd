import axios from "axios"
import { ADD_USER_FAIL, ADD_USER_REMOVE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from "../constants/authConstants"
import { UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, USER_BY_ID_FAIL, USER_BY_ID_REQUEST, USER_BY_ID_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../constants/userConstants"

export const addUser = (payload) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_USER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/users/signup`,payload, config)

        console.log('data profile = ', data)

        dispatch({
            type: ADD_USER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADD_USER_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const removeUserNewData = () => (dispatch) => {
    // disini ada batas dispatchnya atau enggak emang gw yg gak paham
    dispatch({
        type: ADD_USER_REMOVE
    })
}

export const userListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/users/`, config)

        // console.log('data profile = ', data)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const userByIdAction = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: USER_BY_ID_REQUEST
        })

        const { userLogin: {userInfo} } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/users/${id}`, config)

        dispatch({
            type: USER_BY_ID_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_BY_ID_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const updateUserAction = (id, payload) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_USER_REQUEST
        })

        const { userLogin: {userInfo} } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        console.log('before request = ', payload)
        const { data } = await axios.put(`/api/users/${id}`,payload, config)

        console.log('data profile = ', data)

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}