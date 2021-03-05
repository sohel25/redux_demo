import React from 'react';
import images from "./img/images.jpeg";
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src={images} />
            </div>
        </div>
    )
}

export default Header