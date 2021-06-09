export const getAllHostelReducer = (state={hostels:[]},action)=>{
    switch(action.type){
        case 'GET_HOSTEL_REQUEST':
            return {...state,loading:true}
        case 'GET_HOSTEL_SUCCESS':
            return {
                hostels:action.payload,loading:false
            }    
        case 'GET_HOSTEL_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const getHostelByIdReducer = (state={},action)=>{
    switch(action.type){
        case 'GET_HOSTEL_BY_ID':
            return {...state,loading:true}
        case 'GET_HOSTEL_BY_ID_SUCCESS':
        case    "ADD_COMMENT":  
        case "ADD_REVIEW":  
            return {
                hostel:action.payload,loading:false
            }    
        case 'GET_HOSTEL_BY_ID_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}