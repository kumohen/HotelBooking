import React, {useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux' 
import {getHostelById,addReview} from "../actions/hostel_action";
import {getOrderByHostelId} from "../actions/orderAction";
import Loading from '../components/Loading'
import DatePicker from "../components/DatePicker";
import Checkout from "../components/CheckOut";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput"
import Review from "./Review";
import CarouselItem from "./Crousel"

const Single = ({match}) => {
    const [review, setReview] = useState("");
   
    const dispatch = useDispatch();
    const hostelState = useSelector(state => state.getHostelByIdReducer)
    const orderState = useSelector(state => state.getOrderByHostelIdReducer)
    const userState = useSelector(state => state.userLoginReducer)

    const {order} = orderState ;
    const {hostel,loading} = hostelState  ;
    const {currentUser} = userState ;

    useEffect(()=>{
       dispatch( getHostelById(match.params.id))
       dispatch(getOrderByHostelId(match.params.id))
    },[dispatch])
   
  

    const submitReview = (e) => {
        e.preventDefault();
        
        const id = match.params.id;
        dispatch(addReview(review, id));
      };
      var reviewArr = [];
      const fun = () => {
        if (hostel && hostel.reviews) {
         
            hostel.reviews.forEach((item) => {
              return reviewArr.push(item.postedBy);
            });
        } else {
          return "a";
        }
      };
      fun();

      var idArr = [];
      const fun2 = () => {
        if (order ) {
         
            order.forEach((item) => {
              return idArr.push(item.userId);
            });
        } else {
          return "a";
        }
      };
      fun2();
    
      
    return (
        <div style={{marginTop:"90px"}}>
           {(loading ) && <Loading   />}
           <div className="container ">
           <div className="row justify-content-center">
               <div className="col-md-9">
                 
                  <img src={ hostel &&  hostel.image} alt="skkdk" className="img-fluid" style={{height:'60%',width:"100%"}} />
                  <h3 className="text-start">{hostel && hostel.name}</h3>
                  <div style={{ display:"flex", flexDirection:"row" }}>
              
                  <p>${hostel && hostel.price} per night</p>
               </div>
               <div>
                   <p className="text-start">Location:{hostel && hostel.location}</p>
                 
                   <p className="text-start ml-2"><b>Description</b></p>
                   <p className="text-start">{hostel && hostel.description}</p>
               </div>
               </div>

               <div className="col-md-3">
                
                  <DatePicker  />
                  <Checkout amount={hostel && hostel.price} hostelId = {match.params.id} />
               </div>
           </div>
                  <div className="image_gallery">
                    <h4>See More Photo</h4>
                    <CarouselItem   /> 
                  </div>
                <div className="review_component">
                    <Review   reviews={hostel && hostel.reviews}  />
                </div>

                    {
                      order &&  order.length > 0 &&  idArr.includes(currentUser.user._id) && (
                           <div>
                                    <div>
                                   
                                    { !reviewArr.includes(currentUser.user._id) ?
                                    <form onSubmit={submitReview}>
                                        <select value={review} onChange={(event) =>  setReview(event.target.value)} id="add_review">
                                        <option value="5">5</option>
                                        <option value="4">4</option>
                                        <option value="3">3</option>
                                        <option value="2">2</option>
                                        </select>
                                        <button id="review">add review</button>
                                    </form> : null
                                    }
                                    </div>
                                   <hr />

                                  <CommentInput id={ match.params.id} user={currentUser.user} />
                           </div>
                        )
                    }
               
              

           </div>
            <div>
               
                <Comment  id={match.params.id} />
            </div>

        </div>
    );
};

export default Single;