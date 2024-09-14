import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import CloseIcon from '@mui/icons-material/Close';

function CartItems() {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
    
    function getSubtotal(){
        return all_product.reduce((sum, item) => {
            if (cartItems[item.id] > 0) {
                sum += item.new_price * cartItems[item.id];
            }
            return sum;
        }, 0);
    };

    const subtotal = getSubtotal(); 

    return (
        <div className="cartItems">
            <div className="cartItems-heading">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((item) => {
                if (cartItems[item.id] > 0) {
                    const fileName = `/Assets/product_images/${item.category_id}_${item.id}_item.jpg`;

                    return (
                        <div key={item.id} className="cartItems-format cartItems-heading">
                            <img src={fileName} alt="item image" className="cartItem-icon" />
                            <p className="cartItem-name">{item.product_name}</p>
                            <p>₹{item.new_price}</p>
                            <div className="cartItem-qty">{cartItems[item.id]}</div>
                            <p>₹{item.new_price * cartItems[item.id]}</p>
                            <span onClick={() => removeFromCart(item.id)} className="cartItem-remove-icon">
                                <CloseIcon />
                            </span>
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Total</h1>
                    <div className="cartItems-total-item">
                        <p>Subtotal</p>
                        <p>₹{subtotal}</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <h3>Total</h3>
                        <h3>${subtotal}</h3>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartItems-promobox">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
