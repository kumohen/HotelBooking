import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {registerUser} from "../actions/user_action";
import {useDispatch,useSelector} from 'react-redux'

const Register = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(undefined);

  const dispatch = useDispatch()

  useEffect(() => {
    if (url) {
      uploadFields();
    }
  });

  const uploadPic = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "voting");
    data.append("cloud_name", "dvfpkko1z");
    fetch("https://api.cloudinary.com/v1_1/dvfpkko1z/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadFields = () => {
    if (!name || !email || !password) {
       alert("fill all fields")
    }
   
     var user = {
         name ,email ,password,url
     }
     dispatch(registerUser(user));
    setName("");
    
    setPassword("");
    setEmail("");
  
  };

  const PostData = () => {
    if (image) {
      uploadPic();
    } else {
      uploadFields();
    }
  };

  return (
    <div className="registration">
       <div>
       <div>
             <div>
                 <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
             </div>
             <div>
                 <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
             </div>
             <div>
                 <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
             </div>
     
          <div className="file-field input-field">
            <div
              className="btn #64b5f6 input-field2"
              style={{ marginLeft: "20px" }}
            >
              <span>Your Image</span>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                style={{ border: "1px solid white" }}
              />
            </div>
          </div>

          <button className="btn_regis " onClick={() => PostData()}>
            Registration
          </button>
         
        </div>
      </div>
    </div>
  );
};



export default Register;