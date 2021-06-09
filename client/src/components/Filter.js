import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {filterHostel} from "../actions/hostel_action";

const Filter = () => {
    const[searchKey,setSearchKey] = useState("");
  
    const dispatch = useDispatch();

    return (
        
            <div className="row justify-content-center  p-3 mb-5 " style={{marginTop:"-40px"}}>
                <div className="row justify-content-center">
                <div className="col-md-6 ">
                     <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder="location" className="form-control" />
                </div>
               
                <div className="col-md-1 ">
                    <button className="btn btn-primary" onClick={()=> dispatch(filterHostel(searchKey))}>Search</button>
                </div>
                </div>
            </div>
        
    );
};

export default Filter;