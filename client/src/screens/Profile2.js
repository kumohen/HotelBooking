import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {userProfile} from "../actions/user_action";
import {getUsersOrder} from "../actions/orderAction";
import ReactToPdf from "react-to-pdf";
import {Card,Button} from "react-bootstrap"


const Profile = () => {
    const dispatch = useDispatch();
    const ref = React.useRef();

    const {currentUser} = useSelector(state => state.userLoginReducer);
   
    useEffect(()=>{
        dispatch(  userProfile())
        dispatch(getUsersOrder())
    },[])

    return (
        <div style={{marginTop:"9%",marginLeft:"35%"}}>
              
             <img  src={currentUser && currentUser.user.image}
              alt="okkk" style={{height:"120px",width:"120px",borderRadius:"50%",marginLeft:"-23%",marginTop:"-50px",
              border:'2px solid red',
              position:"absolute",zIndex:100}} />
            <Card style={{ width: '27rem',height:'30rem' }} className="shadow-lg p-3 mb-5 bg-body rounded">
           
            <Card.Body className="mt-5">
                <div style={{display:"flex",flexDirection:"column"}} >
                <p style={{marginLeft:"-26px"}}><i className="fas fa-user  mr-2"></i>{currentUser && currentUser.user.name }</p>
                <p style={{marginLeft:"-4px"}}><i className="far fa-envelope"></i>{currentUser && currentUser.user.email }</p>
                <p style={{marginLeft:"-61px"}}><i className="fas fa-graduation-cap"></i>{currentUser && currentUser.user.profession }</p>
                <p style={{marginLeft:"-26px"}}><i className="fas fa-phone-square-alt"></i>{currentUser && currentUser.user.phone }</p>
                <p style={{marginLeft:"-62px"}}><i className="fas fa-user  mr-2"></i>{currentUser && currentUser.user.hobby }</p>
                </div>
               

                <div style={{display:"flex",flexDirection:"row",marginLeft:"40%"}}>
                <i className="fab fa-facebook fa-2x" ></i>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-linkedin fa-2x"></i>
                </div>
                
            </Card.Body>
            </Card>
          

        </div>
    );
};

export default Profile;