import React from "react";
import "./Category.css"
import Button from '@mui/material/Button'
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";
function Category(props){
    const fileName = "./Assets/"+ props.id +".png";

    return(
        <div className="category">
            <img src={fileName} alt={props.name} className="category-image" />
            <Link to={`/categories/${props.name}`}>
            <div className="category-content">
                <h2>{props.name}</h2>
            </div>
            </Link>
        </div>
    )
}
export default Category;