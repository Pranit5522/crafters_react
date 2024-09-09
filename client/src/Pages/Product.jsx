import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from "../Components/Breadcrum/Breadcrum"
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import ProductPrice from "../Components/ProductPrice/ProductPrice";

function Product(){
    
    const {all_product} = useContext(ShopContext);  
    const {productId} = useParams();
    
    const product = all_product.find((product)=>{
        return(product.id === Number(productId));
    });
    

    return(
        <div className="product">
            <div className="image-price">
                <ProductDisplay productId = {productId}/>
                <ProductPrice product = {product}/>
            </div>
        </div>
    )
}

export default Product;