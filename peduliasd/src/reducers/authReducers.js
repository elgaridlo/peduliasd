import { ADD_USER_FAIL, ADD_USER_REMOVE, ADD_USER_REQUEST, ADD_USER_SUCCESS, AUTH_BY_ID_FAIL, AUTH_BY_ID_REQUEST, AUTH_BY_ID_SUCCESS, UPDATE_PASSWORD_ID_FAIL, UPDATE_PASSWORD_ID_REQUEST, UPDATE_PASSWORD_ID_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from "../constants/authConstants"

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true }
    case USER_PROFILE_SUCCESS:
      return { loading: false, detailUser: action.payload }
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userCreated = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return { loading: true }
    case ADD_USER_SUCCESS:
      return { loading: false, success: action.payload }
    case ADD_USER_FAIL:
      return { loading: false, error: action.payload }
    case ADD_USER_REMOVE:
      return {}  
    default:
      return state
  }
}

export const updatePasswordIdReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_ID_REQUEST:
      return { loading: true }
    case UPDATE_PASSWORD_ID_SUCCESS:
      return { loading: false, update: action.payload }
    case UPDATE_PASSWORD_ID_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const authbyIdReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_BY_ID_REQUEST:
      return { loading: true }
    case AUTH_BY_ID_SUCCESS:
      return { loading: false, data: action.payload.data }
    case AUTH_BY_ID_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}