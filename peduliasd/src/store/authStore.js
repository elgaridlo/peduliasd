import { authbyIdReducer, updatePasswordIdReducer } from "../reducers/authReducers";

export const authStore = {
    updatePassword: updatePasswordIdReducer,
    authById: authbyIdReducer
}