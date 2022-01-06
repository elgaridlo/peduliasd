import { CREATE_WORKSHOP_FAIL, CREATE_WORKSHOP_REMOVE, CREATE_WORKSHOP_REQUEST, CREATE_WORKSHOP_SUCCESS, LIST_WORKSHOP_FAIL, LIST_WORKSHOP_REQUEST, LIST_WORKSHOP_SUCCESS } from "../constants/workshopConstants"

export const workshopCreatedReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_WORKSHOP_REQUEST:
        return { loading: true }
      case CREATE_WORKSHOP_SUCCESS:
        return { loading: false, newWorkshop: action.payload }
      case CREATE_WORKSHOP_FAIL:
        return { loading: false, error: action.payload }
      case CREATE_WORKSHOP_REMOVE:
        return {}  
      default:
        return state
    }
  }

  export const workshopListReducer = (state = {}, action) => {
    switch (action.type) {
      case LIST_WORKSHOP_REQUEST:
        return { loading: true }
      case LIST_WORKSHOP_SUCCESS:
        return { loading: false, listWorkshopProgram: action.payload.data }
      case LIST_WORKSHOP_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }