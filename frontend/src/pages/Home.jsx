import React, { useEffect, useState } from 'react'
import { deleteProduct, getProducts } from './api';
import Add from './Add';
import { Link } from 'react-router-dom';
import "frontend/src/styles/homestyle.css"
import NavigationBar from './NavigationBar';
function Home() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        getProducts().then((res)=>{
            setProducts(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    });

    useEffect(()=>{
        let sum=0;
        products.forEach((product)=>{
            sum+=product.price*product.quantity;
        });
        setTotal(sum);
    },[products]);

    const handleDelete = (id) =>{
        const isConfirmed=window.confirm("Do you want to delete this product?");
        if(isConfirmed){
            deleteProduct(id).then((res)=>{
                console.log("Product deleted successfully");
                setProducts(products.filter((product)=>product.id!==id));
            }).catch((err)=>{
                console.log(err);
        });
    }}

    return (
        <div  >
            <NavigationBar/>
            
        <div  className='table-container'>
            <Add/>
            <hr/>
            <h1>Products Available</h1>
            <h3>Total Value: {total}</h3>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Edit Button</th>
                    <th>Delete Button</th>
                </thead>
                <tbody>
                    {products.map((product,k)=>{
                        return(
                            <div>
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name.trim()}</td>
                                <td>{product.price.trim()}</td>
                                <td>{product.quantity}</td>
                                
                            
                            {/* <Link to={`/edit-product/${product.id}`}>Edit Product</Link> */}
                            <td><button className='edit-link'><Link id="linkitem" to={`/edit-product/${product.id}`}>Edit</Link></button></td>
                            <td><button onClick={()=>handleDelete(product.id)} className='delete-button'>Delete</button></td>
                            </tr>
                            </div>
                        );
                    })}
                </tbody>
            </table>
            
        </div>
        </div>
    );
}

export default Home;