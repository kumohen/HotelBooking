  
import {combineReducers} from 'redux';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import {userRegisterReducer ,userLoginReducer,userProfileReducer} from "./reducers/user_reducer"
import {getAllHostelReducer,getHostelByIdReducer} from "./reducers/hostel_reducers";
import {placeOrderReducer,getOrderByHostelIdReducer,getUsersOrdersReducer} from "./reducers/order_reducer"


const rootReducer = combineReducers({
    userRegisterReducer,userLoginReducer,userProfileReducer,
    getAllHostelReducer,getHostelByIdReducer,
    placeOrderReducer,getOrderByHostelIdReducer,getUsersOrdersReducer
})


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser') ) : null

const initialState = {
  
    userLoginReducer:{currentUser}
}
const composedEnhancers = composeWithDevTools({})

const store = createStore(rootReducer, initialState, composedEnhancers(applyMiddleware(thunk)))

export default store ;