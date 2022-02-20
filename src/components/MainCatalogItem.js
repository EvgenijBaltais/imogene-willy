import React from "react";
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom'

const MainCatalogItem = (props) => {

    let backGroundImage = require(`../assets/images/products/${props.products.id}.jpg`),
        location = useLocation(),
        product_id = 1


    return (
        <div className="main-catalog-item">
            <div className = "main-catalog-item__pic" style = {{backgroundImage: backGroundImage}}>
                <div className="watch-item-preview">
                    <button className="watch-item-preview__btn">Подробнее</button>
                </div>
            </div>
            <NavLink to = {`${location.pathname}/${product_id}`} className = "main-catalog-item__title">{props.products.name}</NavLink>
            <div className = "main-catalog-item__price">${props.products.price}</div>
        </div>
    )
}

export default MainCatalogItem