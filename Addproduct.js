  import React, { useState} from 'react'
  import { useNavigate } from 'react-router-dom';
  import Productlist from './Productlist';
  
  export default function Addproduct() {
    const navigate = useNavigate();
    const [name , setname]=React.useState('');
    const [price , setprice]=React.useState('');
    const [category , setcategory]=React.useState('');
    const [company , setcompany]=React.useState('');

    const addproduct=async()=>{
      
        console.warn(name , price , category , company)
        navigate("/p");
        const userid=JSON.parse(localStorage.getItem('user'))._id;
        let result = fetch('http://localhost:5000/addproduct' , {
          method: "post",
          body: JSON.stringify({name , price , category , company , userid}),
          headers: { 
            "content-Type": "application/json",
          },
        })
        result = await result.json();
       
    };
    return (
      <div className='App1'>
         <h1>ADD PRODUCT</h1>
         <input type="text" placeholder="ENTER PRODUCT NAME" className='login'
         value={name}
         onChange={(e)=>{setname(e.target.value)}}
         />
         <input type="text" placeholder="ENTER PRODUCT PRICE" className='login'
         value={price}
          onChange={(e)=>{setprice(e.target.value)}}
         />
         <input type="text" placeholder="ENTER PRODUCT CATEGORY" className='login'
         value={category}
          onChange={(e)=>{setcategory(e.target.value)}}
         />
         <input type="text" placeholder="ENTER PRODUCT COMPANY" className='login'
         value={company}
          onChange={(e)=>{setcompany(e.target.value)}}
         />

         <button onClick={addproduct} className='button'>ADDPRODUCT</button>
      </div>
    )
  }
  