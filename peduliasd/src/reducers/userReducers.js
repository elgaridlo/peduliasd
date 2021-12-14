import { USER_BY_ID_FAIL, USER_BY_ID_REQUEST, USER_BY_ID_SUCCESS, USER_LIST_FAIL, USER_LIST_REMOVE, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../constants/userConstants"

export const userlistReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LIST_REQUEST:
        return { loading: true }
      case USER_LIST_SUCCESS:
        return { loading: false, userlist: action.payload }
      case USER_LIST_FAIL:
        return { loading: false, error: action.payload }
      case USER_LIST_REMOVE:
        return {}  
      default:
        return state
    }
  }

  export const userbyIdReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_BY_ID_REQUEST:
        return { loading: true }
      case USER_BY_ID_SUCCESS:
        return { loading: false, data: action.payload }
      case USER_BY_ID_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }