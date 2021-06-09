import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {userProfile} from "../actions/user_action";
import {getUsersOrder} from "../actions/orderAction";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument"

const Profile = () => {
    const dispatch = useDispatch();
    

    const {orders} = useSelector(state => state.getUsersOrdersReducer);
   const {currentUser} = useSelector(state => state.userLoginReducer);

    useEffect(()=>{
        dispatch(  userProfile())
        dispatch(getUsersOrder())
    },[])
   
    return (
        <div className="row justify-content-center">
        <div className="col-md-9" style={{marginLeft:"5%",marginTop:"90px"}}>
           {/* /</div>/ <div> */}
            {/* <div className="card" style={{width: "18rem",height:"350px",marginLeft:"35%",marginTop:"90px"}}>
            <img src={currentUser.user.image} alt="skkdk" className="rounded" style={{height:'200px',width:"100%"}} />
                <div className="card-body">
                    <h5 className="card-title">{currentUser && currentUser.user.name}</h5>
                     <p>{currentUser.user.email}</p>
                     
                </div>
                </div>
              
               
            </div> */}
            <h3 className="text-center">Booking List</h3>
             <table className="table table-bordered ">
             <thead className="thead">
                    <tr>
                        <th>Transaction Id</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Details</th>
                     
                    </tr>
                </thead>
                <tbody>
                    
           {orders && orders.map(item => (
            
                   <tr key={item._id} style={{marginBottom:"20px"}}>
                            <td>{item.transactionId}</td>
                            <td>{item.name}</td>
                            <td>
                               {item.email}
                            </td>
                            <td>
                               
                            <PDFDownloadLink
                    document={<PdfDocument data={item} />}
                    fileName="payment.pdf"
                    style={{
                    textDecoration: "none",
                    
                    color: "green",
                    fontSize:'17'
                    }}
                >
                    {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : <i className="fa fa-file-download"></i>
                    }
                </PDFDownloadLink>   
                              
                            </td>
                        </tr>
              
             
           ))}
            </tbody>
            </table>
            </div>
        </div>
    );
};

export default Profile;