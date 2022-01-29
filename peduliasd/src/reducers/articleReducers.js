import { ARTICLE_BY_ID_FAIL, ARTICLE_BY_ID_REQUEST, ARTICLE_BY_ID_SUCCESS, CREATE_ARTICLE_FAIL, CREATE_ARTICLE_REMOVE, CREATE_ARTICLE_REQUEST, CREATE_ARTICLE_SUCCESS, LIST_ARTICLE_FAIL, LIST_ARTICLE_REQUEST, LIST_ARTICLE_SUCCESS } from "../constants/articleConstants"


export const articleCreatedReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_REQUEST:
      return { loading: true }
    case CREATE_ARTICLE_SUCCESS:
      return { loading: false, newArticle: action.payload }
    case CREATE_ARTICLE_FAIL:
      return { loading: false, error: action.payload }
    case CREATE_ARTICLE_REMOVE:
      return {}
    default:
      return state
  }
}

export const articleListReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_ARTICLE_REQUEST:
      return { loading: true }
    case LIST_ARTICLE_SUCCESS:
      return { loading: false, listArticle: action.payload.data }
    case LIST_ARTICLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const articleByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_BY_ID_REQUEST:
      return { loading: true }
    case ARTICLE_BY_ID_SUCCESS:
      return { loading: false, detail: action.payload.data }
    case ARTICLE_BY_ID_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}