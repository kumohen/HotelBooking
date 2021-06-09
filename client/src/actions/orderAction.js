import axios from "axios";
export const orderAction = (token,amount,hostelId)=> async (dispatch,getState) =>{
   

    dispatch({
        type:"PLACE_ORDER_REQREST",
        
    })


    //cartReducer,userReducer,userLoginReducer
   const currentUser = getState().userLoginReducer.currentUser ;
   const booking = localStorage.getItem("date") ? JSON.parse(localStorage.getItem("date") ) : null  

    try {
        const response = await axios.post('/api/orders/placeorder',{token,amount,currentUser,hostelId,booking})
        console.log(response)
        dispatch({
           type:'PLACE_ORDER_SUCCESS',
          
       })
    } catch (error) {
       dispatch({
           type:'PLACE_ORDER_FAILED',
           payload:error
       })
    }
   
   
}

export const getOrderByHostelId = (id)=> async dispatch =>{
    dispatch({
        type:'GET_ORDERSBY_HOSTELID',
    })
    try {
        const response = await axios.get(`/api/orders/order/${id}`)
        dispatch({
           type:'GET_ORDERSBY_HOSTELID_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_ORDERSBY_HOSTELID_FAILED',
           payload:error
       })
    }
}

export const getUsersOrder = ()=> async (dispatch,getState) =>{
    dispatch({
        type:'GET_ORDERS_REQUEST'
    })
    const currentUser = getState().userLoginReducer.currentUser ;
    try {
        const response = await axios.get(`/api/orders/getUsersOrder/${currentUser.user._id}`)
     
        dispatch({
           type:'GET_ORDERS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_ORDERS_FAILED',
           payload:error
       })
    }
}