import axios from "axios"
import { ARTICLE_BY_ID_FAIL, ARTICLE_BY_ID_REQUEST, ARTICLE_BY_ID_SUCCESS, CREATE_ARTICLE_FAIL, CREATE_ARTICLE_REQUEST, CREATE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAIL, DELETE_ARTICLE_REQUEST, DELETE_ARTICLE_SUCCESS, LIST_ARTICLE_FAIL, LIST_ARTICLE_REQUEST, LIST_ARTICLE_SUCCESS, UPDATE_ARTICLE_FAIL, UPDATE_ARTICLE_REQUEST, UPDATE_ARTICLE_SUCCESS } from "../constants/articleConstants"

export const createArticleAction = (payload) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_ARTICLE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/article`,payload, config)

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

export const listArticleAction = (query) => async (dispatch) => {
    try {
        dispatch({
            type: LIST_ARTICLE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/article`, query , config)

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

export const updateArticleAction = (id, payload) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_ARTICLE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(`/api/article/${id}`,payload, config)

        dispatch({
            type: UPDATE_ARTICLE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_ARTICLE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const deleteArticleAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_ARTICLE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {        
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/article/${id}`, config)

        dispatch({
            type: DELETE_ARTICLE_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: DELETE_ARTICLE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}