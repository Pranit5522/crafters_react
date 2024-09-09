import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from '../Context/ShopContext'
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import categories from "../Components/data/Categories_list";
import Dropdown from "../Components/Dropdown/Dropdown";
import Item from "../Components/Item/Item";

function ShopCategory(){

    const {all_product} = useContext(ShopContext);
    const {categoryName} = useParams();

    const [requiredProducts, setRequiredProducts] = useState([]);

    useEffect(() => {
        function findCategoryId(category) {
            return category.category_name === categoryName;
        }

        // Obtain id for selected category
        const category = categories.find(findCategoryId);

        // Obtain products for selected category
        const filteredProducts = all_product.filter((product) => {
            return product.category_id === category.id;
        });

        // Update state with filtered products
        setRequiredProducts(filteredProducts);
    }, [all_product, categoryName]);

    // Sort items
    function sortPrice(order) {
        const sortedProducts = [...requiredProducts];
        if (order === 0) {
            sortedProducts.sort((a, b) => a.new_price - b.new_price);
        } else if (order === 1) {
            sortedProducts.sort((a, b) => b.new_price - a.new_price);
        }
        setRequiredProducts(sortedProducts);
    }

    return(
        <div className="categoryPage">
            <Breadcrum catName={categoryName} proName=""/>
            <h1 className="categoryHeading">{categoryName}</h1>
            <hr className="line"/>
            <Dropdown 
                h2L = {sortPrice}
            />
            <div className="itemList">
                {requiredProducts.map((item)=>{
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
    )
}

export default ShopCategory;