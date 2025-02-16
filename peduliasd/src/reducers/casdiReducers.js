import { CASDI_ARTICLE_BY_ID_FAIL, CASDI_ARTICLE_BY_ID_REQUEST, CASDI_ARTICLE_BY_ID_SUCCESS, CREATE_ANSWER_CASDI_FAIL, CREATE_ANSWER_CASDI_REQUEST, CREATE_ANSWER_CASDI_SUCCESS, CREATE_APPOINTMENT_FAIL, CREATE_APPOINTMENT_REQUEST, CREATE_APPOINTMENT_SUCCESS, CREATE_CASDI_ARTICLE_FAIL, CREATE_CASDI_ARTICLE_REMOVE, CREATE_CASDI_ARTICLE_REQUEST, CREATE_CASDI_ARTICLE_SUCCESS, CREATE_QUESTION_CASDI_FAIL, CREATE_QUESTION_CASDI_REQUEST, CREATE_QUESTION_CASDI_SUCCESS, DELETE_CASDI_ARTICLE_FAIL, DELETE_CASDI_ARTICLE_REQUEST, DELETE_CASDI_ARTICLE_SUCCESS, DELETE_QUESTION_CASDI_FAIL, DELETE_QUESTION_CASDI_REQUEST, DELETE_QUESTION_CASDI_SUCCESS, GET_HOUR_MEMBER_FAIL, GET_HOUR_MEMBER_REQUEST, GET_HOUR_MEMBER_SUCCESS, GET_QUESTION_CASDI_FAIL, GET_QUESTION_CASDI_REQUEST, GET_QUESTION_CASDI_SUCCESS, LIST_CASDI_ARTICLE_FAIL, LIST_CASDI_ARTICLE_REQUEST, LIST_CASDI_ARTICLE_SUCCESS, UPDATE_CASDI_ARTICLE_FAIL, UPDATE_CASDI_ARTICLE_REQUEST, UPDATE_CASDI_ARTICLE_SUCCESS } from '../constants/casdiConstants'

export const getHourMemberReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_HOUR_MEMBER_REQUEST:
      return { loading: true }
    case GET_HOUR_MEMBER_SUCCESS:
      return { loading: false, hourMembers: action.payload.data }
    case GET_HOUR_MEMBER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const createAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_REQUEST:
      return { loading: true }
    case CREATE_APPOINTMENT_SUCCESS:
      return { loading: false, newAppointment: action.payload }
    case CREATE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const createQuestionCASDIReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_QUESTION_CASDI_REQUEST:
      return { loading: true }
    case CREATE_QUESTION_CASDI_SUCCESS:
      return { loading: false, createQuestion: action.payload }
    case CREATE_QUESTION_CASDI_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const createAnswerCASDIReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ANSWER_CASDI_REQUEST:
      return { loading: true }
    case CREATE_ANSWER_CASDI_SUCCESS:
      return { loading: false, createAnswer: action.payload }
    case CREATE_ANSWER_CASDI_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getQuestionCASDIReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTION_CASDI_REQUEST:
      return { loading: true }
    case GET_QUESTION_CASDI_SUCCESS:
      return { loading: false, question_casdi: action.payload.data }
    case GET_QUESTION_CASDI_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteQuestionReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_QUESTION_CASDI_REQUEST:
      return { loading: true }
    case DELETE_QUESTION_CASDI_SUCCESS:
      return { loading: false, success: true }
    case DELETE_QUESTION_CASDI_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// CASDI ARTICLE
export const casdiArticleCreatedReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CASDI_ARTICLE_REQUEST:
      return { loading: true }
    case CREATE_CASDI_ARTICLE_SUCCESS:
      return { loading: false, createCasdiArticle: action.payload }
    case CREATE_CASDI_ARTICLE_FAIL:
      return { loading: false, error: action.payload }
    case CREATE_CASDI_ARTICLE_REMOVE:
      return {}
    default:
      return state
  }
}

export const casdiArticleListReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_CASDI_ARTICLE_REQUEST:
      return { loading: true }
    case LIST_CASDI_ARTICLE_SUCCESS:
      return { loading: false, casdiArticle: action.payload.data }
    case LIST_CASDI_ARTICLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const casdiArticleByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case CASDI_ARTICLE_BY_ID_REQUEST:
      return { loading: true }
    case CASDI_ARTICLE_BY_ID_SUCCESS:
      return { loading: false, detail: action.payload.data }
    case CASDI_ARTICLE_BY_ID_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const casdiUpdateArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CASDI_ARTICLE_REQUEST:
      return { loading: true }
    case UPDATE_CASDI_ARTICLE_SUCCESS:
      return { loading: false, data: action.payload.data }
    case UPDATE_CASDI_ARTICLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const casdiDeleteArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CASDI_ARTICLE_REQUEST:
      return { loading: true }
    case DELETE_CASDI_ARTICLE_SUCCESS:
      return { loading: false, success: true }
    case DELETE_CASDI_ARTICLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}