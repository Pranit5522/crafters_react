import React from "react";
import "./item.css"
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

function Item(props){
    const percentOff = ((props.oldPrice - props.newPrice)/props.oldPrice)*100;
    const fileName =`/Assets/product_images/${props.categoryId}_${props.id}_item.jpg`;
    return(
        
            <div className="item">
                <Link to={`/product/${props.id}` }>
                <img className = "item-image" src={fileName} alt="product image" onClick={window.scrollTo(0,0)}/>
                <div className="item-data">
                    <p className="item-name">{props.name}</p>
                    <div className="price-cart">
                        <div className="rating-price-section">
                            <div className="rating">
                                <StarIcon className="star black"/>
                                <StarIcon className="star black"/>
                                <StarIcon className="star black"/>
                                <StarIcon className="star black"/>
                                <StarIcon className="star grey"/>
                            </div>
                            <div className="new-price-section"> 
                                <p className="new-price">₹{props.newPrice}</p>
                                <p className="discount">{Math.round(percentOff)+"% OFF"}</p>
                            </div>
                        </div>
                    </div>
                    <p className="old-price">MRP ₹{props.oldPrice}</p>
                </div>
                </Link>
            </div>
    )
}

export default Item;