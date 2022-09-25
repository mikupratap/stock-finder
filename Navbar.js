import React from "react";
import { Link , useNavigate } from "react-router-dom";

export default function Navbar() {
  const auth =localStorage.getItem('user');
  const navigate = useNavigate();
    const logout=()=>{
     localStorage.clear();
     navigate("/p");
    }
  return (  
    <div className="mycolor">
     {auth ? <ul className="list">
        <li><Link to="/p">PRODUCT</Link></li>
        <li><Link to="/add">ADD PRODUCT</Link></li>
        <li><Link to="/profile">PROFILE</Link></li>
        <li> <Link onClick={logout} to="/sinup">LOGOUT </Link></li>
        </ul>
        :
        <ul className="list">
        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/sinup">SINUP</Link></li>
        </ul>
}
    </div>
  );
}