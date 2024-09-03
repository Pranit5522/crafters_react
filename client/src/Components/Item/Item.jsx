import React from "react";
import useImage from "../useImage";
import "./item.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';

function Item(props){
    const percentOff = ((props.oldPrice - props.newPrice)/props.newPrice)*100;
    const fileName ="./Assets/product_images/"+"1_1_item.jpg";
    const { loading, error, image } = useImage(fileName);
    return(
        <div className="item">
            <img className = "item-image" src={image} alt="product image" />
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
                    <AddShoppingCartIcon className="cart" />
                </div>
                <p className="old-price">MRP ₹{props.oldPrice}</p>
                
            </div>
        </div>
    )
}

export default Item;