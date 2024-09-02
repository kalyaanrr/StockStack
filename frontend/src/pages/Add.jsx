import React, { useState } from 'react';
import { addProduct } from './api';
import "frontend/src/styles/addstyle.css";
function Add() {
    const [product, setProduct] = useState({
        name: '',
        sku:"",
        price: '',
        quantity: '',
        category_id: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product).then((res)=>{
            console.log("Product added successfully");
        }).catch((err)=>{
            console.log(err);
        });
    }

    return (
        <div className='Add'>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"  placeholder="Product Name" onChange={handleChange}/>
                <input type="text" name="sku" placeholder="Product SKU" onChange={handleChange}/>
                <input type="text" name="price" placeholder="Product Price" onChange={handleChange}/>
                <input type="text" name="quantity" placeholder='Product Quantity' onChange={handleChange}/>
                <input type="text" name="category_id" placeholder='Category ID' onChange={handleChange}/>
                <button id="addbutton"type="submit">Submit</button>
            </form>
        </div>
    );

}

export default Add;