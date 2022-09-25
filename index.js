const express = require('express');
const cors = require("cors");

require('./db/config');
const user = require('./db/user');
const product =require('./db/product')
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register" ,async (req , resp)=>{
    let nuser = new user(req.body);
    let result = await nuser.save();  
    resp.send(req.body);
})

app.post("/login" , async(req , resp)=>{
 let ouser= await user.findOne(req.body).select("-password");
 if(req.body.email && req.body.password){
 if(ouser)
 resp.send(ouser);
 else  
 resp.send({result:'no user found'});
 }
 else
 resp.send({result:'no User found'});
})

app.post("/addproduct" , async(req , resp)=>{
    let prod=new product(req.body);
    let result= await prod.save();
    resp.send(result);
    })

app.get("/products" , async(req , resp)=>{
    let products = await product.find();
    if(product.length>0){
        resp.send(products)
    }
    else 
    {
        resp.send({result : "NO PRODUCT FOUND"} );
    }
});

app.delete("/product/:id" , async (req , resp)=>{
   
    const result =await product.deleteOne({_id:req.params.id})
    resp.send(result)
});

app.listen(5000);