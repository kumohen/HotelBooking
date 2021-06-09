import React from 'react';
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import StarRatings from "react-star-ratings";

const Hostel = ({hostel}) => {
    
      return (
        <div  className="shadow-lg p-3 mb-5 bg-body rounded"  >
            <div >
           
            <img src={hostel.image} alt="skkdk" className="img-fluid" style={{height:'200px',width:"100%"}} />
            <h3 className="text-start">{hostel.name}</h3>
            <div style={{display:"flex",flexDirection:"row"}}>
            <p className="text-start" >{hostel.status}</p>
            <div style={{marginTop:"-4px"}}>
            <StarRatings
            rating={hostel.status}
            starRatedColor="red"
            numberOfStars={5}
            className="star_min"
            name="rating"
            starSpacing="2px"
            starDimension="17px"
          />
          </div>
            </div>
           
            <p className="text-end" style={{marginTop:"-40px"}}>${hostel.price} per night</p>
            
           
            <p className="text-start">Location:{hostel.location}</p>
            </div>
            <div className="d-grid gap-2">
            <Link to={`/hostel/${hostel._id}`} className="btn btn-info"> Check  Details </Link>
            </div>

        </div>
    );
};

export default Hostel;