import { useEffect, useState } from "react";
import Logo from "../assests/img/foodvilla.png"
import {Link} from "react-router-dom";

const loggedInUser=()=>{
  return false;
}

const Title=()=>(
    <a href="/">
    <img
    className="logo"
    alt="logo"
     src={Logo}/>
     </a>
  )
  
  const Header=()=>{

    const [isLoggedIn,setIsLoggedIn]=useState("false");
    
  

    return(
      <div className="header">
        <Title/>
        <div className="nav-item">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <li>Cart</li>
          </ul>
        </div>
        {
             (isLoggedIn ?
             <button onClick={()=>setIsLoggedIn(false)}>Logout</button> 
             : <button onClick={()=>setIsLoggedIn(true)}>Login</button>) 
        }
        
      </div>
    )
  }

  export default Header;