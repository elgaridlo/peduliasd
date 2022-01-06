import axios from "axios"
import { CREATE_EDUPROGRAM_FAIL, CREATE_EDUPROGRAM_REQUEST, CREATE_EDUPROGRAM_SUCCESS, LIST_EDUPROGRAM_FAIL, LIST_EDUPROGRAM_REQUEST, LIST_EDUPROGRAM_SUCCESS } from "../constants/eduProgramConstants"

export const eduCreateProgramAction = (payload) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_EDUPROGRAM_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/educationprogram`,payload, config)

        dispatch({
            type: CREATE_EDUPROGRAM_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_EDUPROGRAM_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const eduListProgramAction = () => async (dispatch) => {
    try {
        dispatch({
            type: LIST_EDUPROGRAM_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/educationprogram`, config)

        dispatch({
            type: LIST_EDUPROGRAM_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LIST_EDUPROGRAM_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}