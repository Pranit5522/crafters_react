import React from "react";
import Item from "../Item/Item"
import "./RelatedProducts.css"

function RelatedProducts({relatedProd}){
    return(
        <div className="related-products">
            <h1>Related Products</h1>
            <hr className="line"/>
            <div className="related-products-items">
                {relatedProd.map((item) => {
                    return(
                        <Item 
                            key={item.id}
                            id={item.id}
                            newPrice={item.new_price}
                            oldPrice={item.old_price}
                            name={item.product_name}
                            categoryId={item.category_id}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default RelatedProducts;
