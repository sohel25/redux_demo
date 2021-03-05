import React from "react";
import image from "./img/img.png"
import images from "./img/images.jpeg";
function Home(props){
    console.warn("props",props)

    return(
        <>
        <div className="add-to-cart">
        <img src={images}/>
        </div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src={image}/>

            </div>
            <div className="text-wrapper item">
                <span>
                    Oneplus
                </span>
                <span>
                    Price: Rs 28000
                </span>

            </div>
            <div className="btn-wrapper item">
            <button onClick={()=>
      props.addToCartHandler({pice:28000,name:'OnePlus Nord'})}
                        >
                        Add To Cart</button>
            </div>


        </div>
        </>
    )
}
export default Home;
