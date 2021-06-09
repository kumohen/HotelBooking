import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux'
import {loginUser} from "../actions/user_action";
import {Link} from "react-router-dom"
const Login = ({match}) => {
 
    const[email,setEmail] = useState("mahen@gmail.com");
    const[password,setPassword] = useState("123456");
    
    console.log(match)
    
    const dispatch = useDispatch();
    useEffect(()=>{
       if( localStorage.getItem('currentUser')){
          window.location.href = "/"
        }
    },[])

    const login = ()=> {
       
            const user = {email,password};
            dispatch(loginUser(user));
        
  
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-3 mt-5 shadow p-3 mb-5 bg-white rounded">
                    <h2>Login</h2>
                    <div>
                         <div className="mb-2">
                            <input required type="text" placeholder="email" className="form-control" 
                            value={email} onChange={(e)=> setEmail(e.target.value)}  />
                         </div>
                        
                         <div>
                         <input required type="text" placeholder="password" className="form-control" 
                        value={password} onChange={(e)=> setPassword(e.target.value)}  />
                         </div>

                        
                       
                        <button onClick={login} className="btn btn-dark mt-3">Login</button>
                        <br />
                        <Link to="/register">Go to register page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;