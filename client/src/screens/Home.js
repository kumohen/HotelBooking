import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import Hostel from "../components/Hostel"
import {getAllHostel} from "../actions/hostel_action"
import Loading from "../components/Loading"
import Error from "../components/Error"
// import Filter from "../components/Filter"
import Sidebar from "./Sidebar"
//import pizzas from "../pizzaData";

const Home = () => {
     const dispatch = useDispatch();
     const hostelState = useSelector(state => state.getAllHostelReducer)
    
     const {hostels,loading,error} = hostelState  ;

    useEffect(()=>{
       dispatch(getAllHostel());
    },[])
   
   
   

    return (
        <div>
             <div className="filter_component">
                 
             </div>
            <div className="row justify-content-center ">
                <div className="col-md-2">

                   <Sidebar  />
                  
                  
                </div>
                <div className="col-md-9">
                <div className="row justify-content-center ">
               {loading ? (<Loading />): error ? ( <Error error="something went worng" /> ) : 
                   ( hostels.map(hostel => {
                    return <div className="col-md-4 "  key={hostel._id}>
                        <div>
                            <Hostel  hostel={hostel}  />
                        </div>
                    </div>
                }))
               }
            
           </div>
                </div>
            </div>

           
        </div>
    );
};

export default Home;