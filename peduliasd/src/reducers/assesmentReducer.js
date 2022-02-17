import { ASSESMENT_BY_ID_FAIL, ASSESMENT_BY_ID_REQUEST, ASSESMENT_BY_ID_SUCCESS, CREATE_ASSESMENT_FAIL, CREATE_ASSESMENT_REMOVE, CREATE_ASSESMENT_REQUEST, CREATE_ASSESMENT_SUCCESS } from "../constants/assesmentConstants"

export const assesmentCreatedReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ASSESMENT_REQUEST:
            return { loading: true }
        case CREATE_ASSESMENT_SUCCESS:
            return { loading: false, newAssesment: action.payload._doc }
        case CREATE_ASSESMENT_FAIL:
            return { loading: false, error: action.payload }
        case CREATE_ASSESMENT_REMOVE:
            return {}
        default:
            return state
    }
}

export const assesmentByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case ASSESMENT_BY_ID_REQUEST:
            return { loading: true }
        case ASSESMENT_BY_ID_SUCCESS:
            return { loading: false, detail: action.payload.data }
        case ASSESMENT_BY_ID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}