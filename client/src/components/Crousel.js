import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'  ;
import {getHostelById} from "../actions/hostel_action"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CarouselItem = () => {
    const hostelState = useSelector(state => state.getHostelByIdReducer);

    const {hostel,loading} = hostelState  ;
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch( getHostelById(id))
    // },[id])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      {loading  ? <p>loading...</p>:(
         <Carousel
         responsive={responsive}
         infinite={true}
         autoPlay={false}
         autoPlaySpeed={5000}
       >
 
           {hostel && hostel.images && hostel.images.map(item => (
                 <div key={item}>
                <img src={item} style={{ width: "100%" }} alt="mohen" />
              </div>
           )) }
         
       
       </Carousel>
      )}
     
      
    </div>
  );
};

export default CarouselItem;