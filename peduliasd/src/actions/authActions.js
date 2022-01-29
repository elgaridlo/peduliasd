import axios from "axios"
import { AUTH_BY_ID_FAIL, AUTH_BY_ID_REQUEST, AUTH_BY_ID_SUCCESS, UPDATE_PASSWORD_ID_FAIL, UPDATE_PASSWORD_ID_REQUEST, UPDATE_PASSWORD_ID_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from "../constants/authConstants"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/users/login', { email, password }, config)

        dispatch(getProfile(data.user.userdetail))

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const getProfile = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_PROFILE_REQUEST
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
            type: USER_PROFILE_SUCCESS,
            payload: data
        })

        localStorage.setItem('userDetail', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const authByIdAction = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: AUTH_BY_ID_REQUEST
        })

        const { userLogin: {userInfo} } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/users/auth/${id}`, config)

        dispatch({
            type: AUTH_BY_ID_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: AUTH_BY_ID_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const updatePasswordByIdAction = (id, password) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_PASSWORD_ID_REQUEST
        })

        const { userLogin: {userInfo} } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.patch(`/api/users/passwordUpdate/${id}`, { ...password }, config)

        dispatch({
            type: UPDATE_PASSWORD_ID_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_ID_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const logout = () => (dispatch) => {
    // disini ada batas dispatchnya atau enggak emang gw yg gak paham
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
}