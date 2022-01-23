import React, {useState} from "react";

import Background from '../../assets/product_images/1/trucker.jpg'
import Background2 from '../../assets/product_images/1/truckerhatt.jpg'


const Product_item = () => {

    const [hovering, setState] = useState(0);
    
    console.log(hovering)

    return (
        <>
        <div onMouseEnter={() => this.setState({ hovering: true })}
             onMouseLeave={() => this.setState({ hovering: false })}
            className = "products-item"
            style = {{ backgroundImage: hovering ? `url(${Background})` : `url(${Background2})` }}></div>
        </>
    )
}

export default Product_item