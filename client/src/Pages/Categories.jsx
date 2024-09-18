import React from "react";
import Category from "../Components/Category/Category"
import categories from "../Components/data/Categories_list";

function Categories(){
    return(
        <div className='categories'>
            <img src="./Assets/banner_categories.jpg" alt="banner" className="banner"/>
            <div className="category-list" id="test">
                {categories.map((category)=>(
                    <Category 
                        key = {category.id}
                        id = {category.id}
                        name = {category.category_name}
                    /> 
                ))}
            </div>

        </div>
    )
}

export default Categories;