import axios from "axios"
import { ASSESMENT_BY_ID_FAIL, ASSESMENT_BY_ID_REQUEST, ASSESMENT_BY_ID_SUCCESS, CREATE_ASSESMENT_FAIL, CREATE_ASSESMENT_REQUEST, CREATE_ASSESMENT_SUCCESS } from "../constants/assesmentConstants"

export const createAssesmentAction = (payload) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_ASSESMENT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/assesment`, payload, config)

        console.log('data = ', data)
        dispatch({
            type: CREATE_ASSESMENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_ASSESMENT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const getAssesmentByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ASSESMENT_BY_ID_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/assesment/${id}`, config)

        dispatch({
            type: ASSESMENT_BY_ID_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ASSESMENT_BY_ID_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}