export const placeOrderReducer = (state={},action)=>{
    switch(action.type){
        case 'PLACE_ORDER_REQREST':
            return {
                loading:true
            }
        case 'PLACE_ORDER_SUCCESS':
            return {loading:false,success:true}
        case 'PLACE_ORDER_FAILED':          
            return {loading:false,error:action.payload}
       
        default:
            return state         
    }
}

export const getOrderByHostelIdReducer = (state={},action)=>{
    switch(action.type){
        case 'GET_ORDERSBY_HOSTELID':
            return {...state,order_loading:true}
        case 'GET_ORDERSBY_HOSTELID_SUCCESS':
            return {
                order:action.payload,order_loading:false
            }    
        case 'GET_ORDERSBY_HOSTELID_FAILED':
            return {order_error:action.payload,loadorder_loadinging:false}
        default:
            return state         
    }
}

export const getUsersOrdersReducer = (state={orders:[]},action)=>{
    switch(action.type){
        case 'GET_ORDERS_REQUEST':
            return {...state,loading:true}
        case 'GET_ORDERS_SUCCESS':
            return {
                orders:action.payload,loading:false
            }    
        case 'GET_ORDERS_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}