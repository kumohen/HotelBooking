import React,{useState,useEffect} from 'react';
import {registerUser} from "../../actions/user_action";
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import './Register.css'
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hobby, setHobby] = useState("");
    const [profession, setProfession] = useState("");
    const [phone, setPhone] = useState("");
    const [fbUrl, setFbUrl] = useState("");
    const [instraUrl, setInstraUrl] = useState("");
    const [linkedinUrl, setLinkedinUrl] = useState("");
 
  
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
         name ,email ,password,url,hobby,phone,profession,fbUrl,instraUrl,linkedinUrl
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
        <>
        <div className="container register">
        <div className="row">
            <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Welcome</h3>
                <p>You are 30 seconds away from booking your own room!</p>
                
            </div>
            <div className="col-md-9 register-right">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 className="register-heading">Create Your Account</h3>
                        <div className="row register-form">
                               
                               <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Full Name *"
                                     onChange={(e) => setName(e.target.value)}
                                    value={name} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email*" value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *"
                                     onChange={(e) => setPassword(e.target.value)} value={password} />
                                </div>
                                <div className="form-group">
                                    <input type="Text" className="form-control"  placeholder="Profession" 
                                    value={profession} onChange={(e) => setProfession(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Hobby"
                                     value={hobby} onChange={(e) => setHobby(e.target.value)} value={hobby} />
                                </div>
                                </div>
                               
                                <div className="col-md-6">
                               
                                <div className="form-group">
                                    <input type="number" minLength="10" maxLength="10" name="PhoneNum" className="form-control"
                                     placeholder="Your Phone *" value={phone} onChange={(e) => setPhone(e.target.value)} value={phone} />
                                </div>
                                
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Your Facebook *"
                                     onChange={(e) => setFbUrl(e.target.value)} value={fbUrl} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Your Instragram *"
                                    onChange={(e) => setInstraUrl(e.target.value)} value={instraUrl} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Your linkedin *" 
                                    onChange={(e) => setLinkedinUrl(e.target.value)} value={linkedinUrl} />
                                </div>
                                </div>
                            
                                <div className="mb-3">
                                  <label htmlFor="formFile" className="form-label">Select Your Image</label>
                                  <input className="form-control" type="file" id="formFile"
                                   onChange={(e) => setImage(e.target.files[0])}
                                  />
                                </div>
                               
                                <button className="btn btn-danger " onClick={() => PostData()}>
                                    Registration
                                </button>
                                <Link to="/login" className="login_btn">Go to Login Page</Link>
                        </div>
                    </div>
                     
                   
                </div>
            </div>
        </div>
        </div>
      
       
    </>
    );
};

export default Register;