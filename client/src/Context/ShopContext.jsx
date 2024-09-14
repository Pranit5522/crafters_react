import React, {createContext, useState} from "react";
import all_product from "../Components/data/Products"

export const ShopContext = createContext(null);

function getDefaultCart(){
    let cart = {};
    for(let index=0; index < all_product.length; index++){
        cart[index] = 0;
    }
    return cart
}

function ShopContextProvider(props){

    const [cartItems, setCartItems] = useState(getDefaultCart());

    function addToCart(itemId, qty) {
        setCartItems(prev => {
            const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + qty };
            console.log(updatedCart);
            return updatedCart;
        });
    }
    function removeFromCart(itemId){
        setCartItems((prev)=>{
            const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) - 1 };
            console.log(updatedCart);
            return updatedCart;
        })
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart}; 

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;