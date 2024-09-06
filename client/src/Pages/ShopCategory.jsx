import React, { useContext } from "react";
import { ShopContext } from '../Context/ShopContext'

function ShopCategory(props){
    const {all_product} = useContext(ShopContext);
    return(
        <div>
            <div className="shopcategory-indexSort">  
                <p>
                    <span>Showing 1-5</span> out of 5 
                </p>
                
            </div>
        </div>
    )
}

export default ShopCategory;