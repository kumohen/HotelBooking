import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {logoutUser} from "../actions/user_action"
import {Link} from "react-router-dom"
import {filterHostel} from "../actions/hostel_action"

const Navbar = () => {
  const[searchKey,setSearchKey] = useState("");
   const dispatch = useDispatch();
   const {currentUser} = useSelector(state => state.userLoginReducer);
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">HotelBooking</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <img src={currentUser && currentUser.user.image} alt="okk" style={{height:"60px",width:"60px",borderRadius:"50%",marginTop:"-20px"}} />
    </button>
 { currentUser && (
      <div className="container-fluid" style={{width:"60%",marginLeft:"10%"}}>
      <div style={{display:"flex",flexDirection:"rows"}}>
      <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
     <button className="btn btn-outline-success" onClick={()=> dispatch(filterHostel(searchKey))}>Search</button>
      </div>
   

 </div>
 )}
 

   
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <ul className="navbar-nav ml-auto ">
            {currentUser ? (
                  <div className="dropdown mt-2">
                  <Link className=" dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="">
                      
                       <img src={currentUser.user.image} alt="okk" style={{height:"50px",width:"50px",borderRadius:"50%",marginTop:"-17px"}} />
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to="/profile">Payment</Link>
                    <Link className="dropdown-item" to="/list">profile</Link>
                    <Link className="dropdown-item" to="/login" > <li onClick={()=> dispatch(logoutUser())} >Logout</li></Link>
                  
                  </div>
                </div>
            ): (
              <li className="nav-item ">
              <Link className="nav-link " aria-current="page" to="/login">Login</Link>
              </li>
            )}
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;