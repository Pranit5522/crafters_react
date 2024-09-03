import React from "react";
import Category from "../Components/Category/Category"
import categories from "../Components/data/Categories_list";
function Categories(){
    return(
        <div className='categories sidespace'>
            <h2>CATEGORIES</h2>
            <p>Discover our wide range of premium furniture collections, each designed to bring style, comfort, and quality to your home. Explore and find the perfect pieces to enhance your living spaces with Crafters.</p>
            <div className="category-list">
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