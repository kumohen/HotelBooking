import React,{useState} from 'react';
import {useDispatch} from 'react-redux' 
import {addComment} from "../actions/hostel_action";
import {Modal,Button} from "react-bootstrap"

const CommentInput = ({id,user}) => {
    const[comment,setComment] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const commentSubmit = ()=>{
        dispatch(addComment(comment,id,user))
        handleClose();
        setComment("");
    }
    
    return (
        <div >
             <Button variant="success" onClick={handleShow}>Comment </Button>{' '}
      <Modal show={show} onHide={handleClose}  dialogClassName="modal-90w" >
      <Modal.Body>
               <div className="mb-1">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" 
                onChange={e => setComment(e.target.value)}></textarea>
                </div>
      
            
              <div style={{marginLeft:"37%"}}>
            <button className="btn btn-primary btn-lg " type="button" onClick={()=> commentSubmit()}>Comment</button>
            </div>
            </Modal.Body> 
           
      </Modal>
              
              
    
        </div>
    );
};

export default CommentInput;