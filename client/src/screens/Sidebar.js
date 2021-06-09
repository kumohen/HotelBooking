import React from 'react';
import {useDispatch} from 'react-redux'
import {filterHostelByPrice} from "../actions/hostel_action"
import {checkValue,hotelStar} from "../utills";

const Sidebar = () => {
    
    const dispatch = useDispatch();

    const handleChange = e => {
         if((e.target.checked)){
            dispatch(filterHostelByPrice(e.target.value,null))
         }

         
       
       // console.log(e.target.checked)
        //  checkValue.forEach(item => {
        //      var temp = parseInt(e.target.id);
        //      console.log(item.value === temp);
        //      if(item.value == temp){
        //          item.checked = e.target.checked ;
        //      } else {
        //          item.checked = false ;
        //      }
 
        //  })
      
     }
     const handleStarChange = e => {
         console.log(e.target.value)
        if((e.target.checked)){
            dispatch(filterHostelByPrice(null ,e.target.value))
         }
    }
    return (
        <div>
            <div className="card price_filter">
            <p className="text-start text-bold">Filter By Price</p>
             {checkValue.map((item,index)=>(
                          <div className="form-check" key={index}>
                          <input className="form-check-input" type="checkbox" value={item.value} id= {item.value}
                         
                           onChange={(e) => handleChange(e)} />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                              below  ${item.value}
                          </label>
                          </div>
                    ))}
            </div>  
            <div className="price_filter">
            <p className="text-start text-bold">Filter By Star</p>
             {hotelStar.map((item,index)=>(
                          <div className="form-check" key={index}>
                          <input className="form-check-input" type="checkbox" value={item} id= {item}
                         
                           onChange={(e) => handleStarChange(e)} />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                {item} star
                          </label>
                          </div>
                    ))}
            </div>      
        </div>
    );
};

export default Sidebar;