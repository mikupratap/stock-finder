import { createMemoryHistory } from 'history';
import React, { useState , useEffect } from 'react'

export default function Productlist() {
    const [products , setproduct]= useState([]);

    useEffect(()=>{
         getproduct();
    } , [])

    const getproduct= async()=>{
         let result = await fetch('http://localhost:5000/products');
         result = await result.json();
         setproduct(result);
    }

    const deleteproduct = async(id)=>{
        console.log(id);    
           let result = await fetch(`http://localhost:5000/product/${id}` , {
            method:"Delete"
           });

          result = await result.json()

          if(result){
            getproduct();
          }
    }

  return (
    <div className='product-list'>
        <h3>PRODUCT LIST</h3>
        <ul>
            <li>SR_NO</li>
            <li>NAME</li>
            <li>PRICE</li>
            <li>CATEGORY</li>
            <li>COMPANY</li>
            <li>operation</li>
        </ul>
        {
            products.map((item , index)=>
            <ul key={item._id}>
              <li>{index+1}</li>
              <li>{item.name}</li>  
              <li>$ {item.price}</li>
              <li>{item.category}</li>   
              <li>{item.company}</li>
              <li><button onClick={()=>deleteproduct(item._id)}>DELETE</button></li> 
            </ul>
            )
        }
    </div>
  )
}