import axios from "axios"
import { CREATE_WORKSHOP_FAIL, CREATE_WORKSHOP_REQUEST, CREATE_WORKSHOP_SUCCESS, LIST_WORKSHOP_FAIL, LIST_WORKSHOP_REQUEST, LIST_WORKSHOP_SUCCESS } from "../constants/workshopConstants"

export const createWorkshopAction = (payload) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_WORKSHOP_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/workshop`,payload, config)
        console.log('data - ', data)

        dispatch({
            type: CREATE_WORKSHOP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_WORKSHOP_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const listWorkshopction = () => async (dispatch) => {
    try {
        dispatch({
            type: LIST_WORKSHOP_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/workshop`, config)

        dispatch({
            type: LIST_WORKSHOP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LIST_WORKSHOP_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}