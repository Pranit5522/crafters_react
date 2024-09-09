import React from "react";
import "./Dropdown.css";

function Dropdown(props){

    function handleClick(){
        const caret = $(".caret");
        const menu = $(".menu");

        menu.toggleClass("menu-open");
        caret.toggleClass("caret-rotate");
    }

    return(
        <div className="parent">
            <div className="sort">
                <div className="select" onClick={handleClick}>
                    <span className="selected">Sort</span>
                    <div className="caret"></div>
                </div>
                <ul className="menu">
                    <li onClick={() => {
                        handleClick()
                        props.h2L(1);
                    }}
                    >Price: (High to Low)</li>
                    <li onClick={() => {
                        handleClick()
                        props.h2L(0)
                    }}
                    id="last">Price: (Low to High)</li>
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;