import { workshopCreatedReducer, workshopListReducer } from "../reducers/workshopReducers";


export const workshopStore = {
    workshopList: workshopListReducer,
    workshopNew: workshopCreatedReducer
}