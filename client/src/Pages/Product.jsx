import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from "../Components/Breadcrum/Breadcrum"
import { useParams } from "react-router-dom";

function Product(){
    
    const {all_product} = useContext(ShopContext);  
    const {productId} = useParams();
    
    

    return(
        <div className="product">
             
        </div>
    )
}

export default Product;