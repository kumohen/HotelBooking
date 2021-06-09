import './App.css';
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import List from "./screens/Profile2";
import Register from "./components/Auth/Register";
import Login from "./screens/Login"
import Single from "./components/Single"


import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
           <BrowserRouter>
           <Navbar  />
           <Route path="/login"  exact component={Login} />
             <Route path="/"  exact component={Home} />
             <Route path="/profile"   component={Profile} />
             <Route path="/list" exact  component={List} />
             <Route path="/register"  exact component={Register} />
             <Route path="/hostel/:id"  exact component={Single} />
            
         
           </BrowserRouter>
      
    </div>
  );
}

export default App;