import React from "react";
import "./ProductPrice.css";
import StarIcon from '@mui/icons-material/Star';

function ProductPrice({product}){

    const percentOff = ((product.old_price - product.new_price)/product.old_price)*100;

    return(
        <div className="productPrice">
            <h2> {product.product_name}</h2>
            <div className="productRating">
                <div>
                    <StarIcon className="star yellow"/>
                    <StarIcon className="star yellow"/>
                    <StarIcon className="star yellow"/>
                    <StarIcon className="star yellow"/>
                    <StarIcon className="star grey"/>
                </div>
                <p>(137)</p>
            </div>
            <div className="price_discount">
                <p className="product-price">₹{product.new_price}</p>
                <p className="product-discount">{Math.round(percentOff)+"% OFF"}</p>
            </div>
            <p className="old-price">MRP ₹{product.old_price}</p>
            <div className="cart-button"> ADD TO CART</div>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    );
}

export default ProductPrice;