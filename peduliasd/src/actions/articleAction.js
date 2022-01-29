import axios from "axios"
import { ARTICLE_BY_ID_FAIL, ARTICLE_BY_ID_REQUEST, ARTICLE_BY_ID_SUCCESS, CREATE_ARTICLE_FAIL, CREATE_ARTICLE_REQUEST, CREATE_ARTICLE_SUCCESS, LIST_ARTICLE_FAIL, LIST_ARTICLE_REQUEST, LIST_ARTICLE_SUCCESS } from "../constants/articleConstants"

export const createArticleAction = (payload) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_ARTICLE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/article`,payload, config)
        console.log('data - ', data)

        dispatch({
            type: CREATE_ARTICLE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_ARTICLE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const listArticleAction = () => async (dispatch) => {
    try {
        dispatch({
            type: LIST_ARTICLE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/article`, config)

        dispatch({
            type: LIST_ARTICLE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LIST_ARTICLE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const getArticleByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ARTICLE_BY_ID_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/article/${id}`, config)

        dispatch({
            type: ARTICLE_BY_ID_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ARTICLE_BY_ID_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}