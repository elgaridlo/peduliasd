import { assesmentByIdReducer, assesmentCreatedReducer } from "../reducers/assesmentReducer";

export const assesmentStore = {
    newAssesment: assesmentCreatedReducer,
    getAssesmentId: assesmentByIdReducer
}