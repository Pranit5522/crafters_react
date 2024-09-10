import React from "react";
import './Description.css';

function Description(){
    return(
        <div className="productDescription">
            <div className="tabs">
                <p>Description</p>
                <p className="last-p">Reviews (137)</p>
            </div>
            <p className="description-content">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate facilisi tempus hac suscipit per dui nascetur dapibus adipiscing lacinia purus vitae aenean proin nunc quis primis a ridiculus lectus lobortis facilisis massa nam netus sagittis aliquam maecenas sapien commodo augue netus aenean habitasse non donec dapibus posuere in condimentum tincidunt ipsum ligula gravida ultricies leo ultricies blandit ullamcorper cursus montes tortor scelerisque sollicitudin penatibus etiam euismod laoreet mauris nec ridiculus.
                <br />
                <br />    
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    );
}

export default Description;