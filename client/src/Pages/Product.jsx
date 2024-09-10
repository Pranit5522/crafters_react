import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from "../Components/Breadcrum/Breadcrum"
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import ProductPrice from "../Components/ProductPrice/ProductPrice";
import categories from "../Components/data/Categories_list"

function Product(){
    
    const {all_product} = useContext(ShopContext);  
    const {productId} = useParams();
    
    const product = all_product.find((product)=>{
        return(product.id === Number(productId));
    });

    const cat = categories.find((category)=>{
        return(category.id === Number(product.category_id));
    })
    

    return(
        <div className="product">
            <Breadcrum 
                catName={cat.category_name}
                proName={product.product_name}
            />
            <div className="image-price">
                <ProductDisplay productId = {productId}/>
                <ProductPrice product = {product}/>
            </div>
        </div>
    )
}

export default Product;