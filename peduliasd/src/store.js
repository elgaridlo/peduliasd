import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userCreated, userLoginReducer, userProfileReducer } from './reducers/authReducers'
import { userbyIdReducer, userlistReducer } from './reducers/userReducers'
import { workshopStore } from './store/workshopStore'
import { eduProgramStore } from './store/eduProgramStore'
import { articleStore } from './store/articleStore'
import { authStore } from './store/authStore'
import { userStore } from './store/userStore'
import { assesmentStore } from './store/assesmentStore'
import { productStore } from './store/productStore'
import { casdiStore } from './store/casdiStore'

const reducer = combineReducers({
    ...workshopStore,
    ...eduProgramStore,
    ...articleStore,
    ...authStore,
    ...userStore,
    ...assesmentStore,
    ...productStore,
    ...casdiStore,
    userLogin: userLoginReducer,
    userDetail: userProfileReducer,
    addNewUser: userCreated,
    userList: userlistReducer,
    userById: userbyIdReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const userProfileFromStorage = localStorage.getItem('userDetail')
  ? JSON.parse(localStorage.getItem('userDetail'))
  : null

// ini initiate jadi ini bakal dijalankan terlebih dahulu
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userDetail:  userProfileFromStorage ,
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
