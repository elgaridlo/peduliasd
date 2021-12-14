import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from "../constants/authConstants"

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

        console.log('data login = ', data)
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

export const getProfile = (id) => async (dispatch) => {
    try {
        dispatch({
            type: USER_PROFILE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/users/${id}`, config)

        console.log('data profile = ', data)

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

export const logout = () => (dispatch) => {
    // disini ada batas dispatchnya atau enggak emang gw yg gak paham
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
}