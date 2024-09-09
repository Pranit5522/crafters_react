import React from "react";
import "./Category.css"
import Button from '@mui/material/Button'
import useImage from "../useImage";
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";
function Category(props){
    const fileName = "./Assets/"+ props.id +".png";
    const { loading, error, image } = useImage(fileName);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading image</div>;

    return(
        <div className="category">
            <img src={image} alt={props.name} className="category-image" />
            <div className="category-content">
                <h2>{props.name}</h2>
                <Link to={`/categories/${props.name}`}><Button variant="outlined"><EastIcon fontSize="large"/></Button></Link>
            </div>
        </div>
    )
}
export default Category;