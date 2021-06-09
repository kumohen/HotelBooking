import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'  ;
import {getHostelById} from "../actions/hostel_action"

const Comment = ({id}) => {
    const hostelState = useSelector(state => state.getHostelByIdReducer);

    const {hostel} = hostelState  ;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch( getHostelById(id))
    },[id])

    return (
        <div className="container">
            <div className="col-md-10">
             {hostel && hostel.comments && hostel.comments.reverse().map(item => {
                    return(
                        <div key={item.text} className='row comment_box'>
                            <div className="col-md-2">
                            <img src={ item &&  item.comentorPic} alt="skkdk" className="img-fluid"
                             style={{height:'80px',width:"80px",borderRadius:"50%"}} />
                            </div>
                            <div className="col-md-10">
                            <p className="text-start fw-bolder mt-2">{item.comentor}</p>
                            <p className="text-start fw-light " style={{marginTop:"-17px"}}>{item.createdAt.substring(0,10)}</p>
                            <p className="text-start">{item.text}</p>
                            </div>
                          
                        </div>
                    )
                }) } 
            </div>
        </div>
    );
};

export default Comment;