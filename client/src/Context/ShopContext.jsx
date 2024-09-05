import React, {createContext} from "react";
import all_product from "../Components/data/Products"

export const ShopContext = createContext(null);

function ShopContextProvider(props){
    const contextValue = {all_product};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;