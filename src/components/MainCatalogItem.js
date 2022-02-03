import React from "react";
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom'

const MainCatalogItem = (props) => {

    const backGroundImage = require(`../assets/images/products/${props.products.id + 1}.jpg`)

    let location = useLocation();

    let product_id = 1

    return (
        <div className="main-catalog-item">
            <div className = "main-catalog-item__pic" style = {{backgroundImage: backGroundImage}}>
                <div className="watch-item-preview">
                    <button className="watch-item-preview__btn">Подробнее</button>
                </div>
            </div>
            <NavLink to = {`${location.pathname}/${product_id}`} className = "main-catalog-item__title">Bartender Kit in Gun Metal Black with Rustic Wood Stand</NavLink>
            <div className = "main-catalog-item__price">$79.99</div>
        </div>
    )
}

export default MainCatalogItem