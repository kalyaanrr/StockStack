import React, { useState, useEffect } from 'react';
import { getProductById, updateProduct } from './api';
import { useParams } from 'react-router-dom';
import "frontend/src/styles/editstyle.css"
const Edit = () => {
    const {id}=useParams();
    const [product, setProduct] = useState({
    name: '',
    sku: '',
    price: '',
    quantity: '',
    category_id: ''
    });

    //fetch details of the product
    useEffect(()=>{
        getProductById(id).then((res)=>{
            console.log(res.data[0]);
            setProduct(res.data[0]);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);


    // Handle input change
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(id,product).then((res)=>{
            console.log("Product updated successfully");
        }).catch((err)=>{
            console.log(err);
        });
    };

    return (

    <div className='Edit' > 
        <header className="Header">Edit Item</header>
        <form onSubmit={handleSubmit}>
        <input
            class="inputText"
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder={product.name}
        />
        <input
            class="inputText"
            type="text"
            name="sku"
            value={product.sku}
            onChange={handleChange}
            placeholder={product.sku}
        />
        <input
            class="inputText"
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder={product.price}
        />
        <input
            class="inputText"
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            placeholder={product.quantity}
        />
        <input
            class="inputText"
            type="number"
            name="category_id"
            value={product.category_id}
            onChange={handleChange}
            placeholder={product.category_id}
        />
        <button type="submit">Update Product</button>
        </form>
    </div>
    );
};

export default Edit;
