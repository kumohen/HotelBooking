import axios from 'axios';

export const getAllHostel = ()=> async dispatch =>{
     dispatch({
         type:'GET_HOSTEL_REQUEST'
     })
     try {
         const response = await axios.get('/api/hostels/allHostel')
         dispatch({
            type:'GET_HOSTEL_SUCCESS',
            payload:response.data
        })
     } catch (error) {
        dispatch({
            type:'GET_HOSTEL_FAILED',
            payload:error
        })
     }
}
export const filterHostel = (searchKey)=> async dispatch =>{
  dispatch({
      type:'GET_HOSTEL_REQUEST'
  })

  var filterItem ;
  try {
      const response = await axios.get('/api/hostels/allHostel')
      filterItem = response.data.filter(pizza => pizza.location.toLowerCase().includes(searchKey));
     
      dispatch({
         type:'GET_HOSTEL_SUCCESS',
         payload:filterItem
     })
  } catch (error) {
     dispatch({
         type:'GET_HOSTEL_FAILED',
         payload:error
     })
  }
}


export const filterHostelByPrice = (price,star)=> async dispatch =>{
  dispatch({
      type:'GET_HOSTEL_REQUEST'
  })
 
  var filterItem ;
  try {
      const response = await axios.get('/api/hostels/allHostel')
      if(star == null){
        filterItem = response.data.filter(pizza => pizza.price <=price );
      } 
      if(price == null){
        filterItem = response.data.filter(pizza =>  pizza.status === parseInt(star) );
        
      }
        
      
     
     
      dispatch({
         type:'GET_HOSTEL_SUCCESS',
         payload:filterItem
     })
  } catch (error) {
     dispatch({
         type:'GET_HOSTEL_FAILED',
         payload:error
     })
  }
}


export const getHostelById = (id)=> async dispatch =>{
    dispatch({
        type:'GET_HOSTEL_BY_ID'
    })
    try {
        const response = await axios.get(`/api/hostels/hostel/${id}`)
        dispatch({
           type:'GET_HOSTEL_BY_ID_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_HOSTEL_BY_ID_FAILED',
           payload:error
       })
    }
}


export const addComment = (text, id,user) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    dispatch({
        type: "ADD_COMMENT_REQUEST"
       
      });
    const response = await axios.put(`/api/hostels/comment/${id}`, { text,user }, config);
     console.log(response)
    dispatch({
      type: "ADD_COMMENT",
      payload: response.data,
    });
     
  };

  
export const addReview = (text, id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  };
  dispatch({
      type: "ADD_REVIEW_REQUEST"
     
    });
  const response = await axios.put(`/api/hostels/review/${id}`, { text }, config);
  
  dispatch({
    type: "ADD_REVIEW",
    payload: response.data,
  });
   
};

