import React, { useContext, useState } from "react";
import "./ProductPrice.css";
import StarIcon from '@mui/icons-material/Star';
import Description from "../Description/Description";
import { ShopContext } from "../../Context/ShopContext"

function ProductPrice({ product }) {

    const {addToCart} = useContext(ShopContext);
    const percentOff = ((product.old_price - product.new_price) / product.old_price) * 100;
    const [isExpanded, setExpanded] = useState(false);
    const [qty, setQty] = useState(1);

    function handleClick() {
        setExpanded(prevValue => !prevValue);
    }

    function handleQtyChange(event) {
        setQty(Number(event.target.value));
        setExpanded(false);
    }

    return (
        <div className="productPrice">
            <h2> {product.product_name}</h2>
            <div className="productRating">
                <div>
                    <StarIcon className="star yellow" />
                    <StarIcon className="star yellow" />
                    <StarIcon className="star yellow" />
                    <StarIcon className="star yellow" />
                    <StarIcon className="star grey" />
                </div>
                <p>(137)</p>
            </div>
            <div className="price_discount">
                <p className="product-price">₹{product.new_price}</p>
                <p className="product-discount">{Math.round(percentOff) + "% OFF"}</p>
            </div>
            <p className="old-price">MRP ₹{product.old_price}</p>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <span className="qty" onClick={handleClick}>
                <span>QTY {qty} </span>
                <div className={`qty-caret ${isExpanded && "caret-rotate"}`}></div>
                
                {isExpanded && (
                    <select className="qty-dropdown" value={qty} onChange={handleQtyChange} size="5">
                        {Array.from({ length: 9 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                )}
            </span>

            <br />
            <div className="cart-button" onClick={()=>{addToCart(product.id, qty)}}> ADD TO CART</div>

            <Description />
        </div>
    );
}

export default ProductPrice;
