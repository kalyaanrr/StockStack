const express= require("express");
const mysql=require("mysql2");
const cors=require("cors");
const bodyParser=require("body-parser");

const app=express();
app.use(cors());
app.use(bodyParser.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Bhuvan@123",
    database:"stockstack"
});
 
app.get("/",(req,res)=>{
    res.send("Hello World");
}); 

app.get("/api/products",(req,res)=>{
    const sql="SELECT * FROM products";
    db.query(sql,(err,result)=>{
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
});

app.get("/api/products/:id",(req,res)=>{
    const id=req.params.id;
    const sql="SELECT * FROM products WHERE id=?";
    db.query(sql,[id],(err,result)=>{
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
});

app.post("/api/products",(req,res)=>{
    const product=req.body;
    const sql="INSERT INTO products(name,sku,price,quantity,category_id) VALUES (?,?,?,?,?)";
    db.query(sql,[product.name,product.sku,product.price,product.quantity,product.category_id],(err,result)=>{
        if(err){
            console.log("Error in server");
            return res.json(err);
        }
        console.log("Product added successfully");
        return res.json(result);
    });
});

app.put("/api/products/:id",(req,res)=>{
    const id=req.params.id;
    const product=req.body;
    const sql="UPDATE products SET name=?,sku=?,price=?,quantity=?,category_id=? WHERE id=?";
    db.query(sql,[product.name,product.sku,product.price,product.quantity,product.category_id,id],(err,result)=>{
        if(err){
            return res.json(err);
        
        }
        console.log("Product updated successfully "+Date.now());
        return res.json(result);
    });
});

app.delete("/api/products/:id",(req,res)=>{
    const id=req.params.id;
    const sql="DELETE FROM products WHERE id=?";
    db.query(sql,[id],(err,result)=>{
        if(err){
            return res.json(err);
        }
        console.log("Product deleted successfully");
        return res.json(result);
    });
});

app.listen(8081,()=>{   
    console.log("Server is running on port 8081");
}); 