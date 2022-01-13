import { CREATE_EDUPROGRAM_FAIL, CREATE_EDUPROGRAM_REMOVE, CREATE_EDUPROGRAM_REQUEST, CREATE_EDUPROGRAM_SUCCESS, DELETE_EDUPROGRAM_FAIL, DELETE_EDUPROGRAM_REQUEST, DELETE_EDUPROGRAM_SUCCESS, GET_BY_ID_EDUPROGRAM_FAIL, GET_BY_ID_EDUPROGRAM_REQUEST, GET_BY_ID_EDUPROGRAM_SUCCESS, LIST_EDUPROGRAM_FAIL, LIST_EDUPROGRAM_REQUEST, LIST_EDUPROGRAM_SUCCESS } from "../constants/eduProgramConstants"

export const eduProgramCreated = (state = {}, action) => {
    switch (action.type) {
      case CREATE_EDUPROGRAM_REQUEST:
        return { loading: true }
      case CREATE_EDUPROGRAM_SUCCESS:
        return { loading: false, newEduProgram: action.payload }
      case CREATE_EDUPROGRAM_FAIL:
        return { loading: false, error: action.payload }
      case CREATE_EDUPROGRAM_REMOVE:
        return {}  
      default:
        return state
    }
  }

  export const EduListProgramReducer = (state = {}, action) => {
    switch (action.type) {
      case LIST_EDUPROGRAM_REQUEST:
        return { loading: true }
      case LIST_EDUPROGRAM_SUCCESS:
        return { loading: false, listEduProgram: action.payload.data }
      case LIST_EDUPROGRAM_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const GetEduProgramByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_BY_ID_EDUPROGRAM_REQUEST:
        return { loading: true }
      case GET_BY_ID_EDUPROGRAM_SUCCESS:
        return { loading: false, eduDetail: action.payload.data }
      case GET_BY_ID_EDUPROGRAM_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const deleteEduProgramReducer = (
    state = {},
    action,
  ) => {
    switch (action.type) {
      case DELETE_EDUPROGRAM_REQUEST:
        return { loading: true }
      case DELETE_EDUPROGRAM_SUCCESS:
        return { loading: false, success: true }
      case DELETE_EDUPROGRAM_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }