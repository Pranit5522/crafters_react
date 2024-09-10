import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Breadcrum.css"
import { Link } from "react-router-dom";

function Breadcrum({catName, proName}){

    return(
        <div className="breadcrum" >
            <Link to='/' className="path">Furniture</Link> 
            <KeyboardArrowRightIcon fontSize="small" className="arrow"/> 
            <Link to='/categories' className="path">Categories</Link> 
            <KeyboardArrowRightIcon fontSize="small" className="arrow"/> 
            <Link to={`/categories/${catName}`} className="path">{catName}</Link>
            {proName!=="" && <KeyboardArrowRightIcon fontSize="small" className="arrow"/> }
            {proName!=="" && <p className="last-name">{proName}</p> }
        </div>
    )
}

export default Breadcrum;