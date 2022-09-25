import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sinup() {
  const navigate=useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const collectdata = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { 
        "content-Type": "application/json",
      },
    });
    result = await result.json();
  
    navigate("/login");
  };
  return (
    <div className="loginpage">
      <h1>Register</h1>
      <input
        className="inputbox"
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="enter name"
      />

      <input
        className="inputbox"
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="enter email"
      />
      <input
        className="inputbox"
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="enter password"
      />
      <button className="button" onClick={collectdata} type="button">
        SINUP
      </button>
    </div>
  );
}