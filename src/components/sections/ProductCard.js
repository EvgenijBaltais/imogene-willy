import React from "react"
import { NavLink } from "react-router-dom"

import '../../styles/sections/productCard.scss'

const ProductCard = (props) => {

    return (
        <>
            <div className="product-card-item">
                <div className = "product-card-item__pic-w">
                    <img className = "product-card-item__pic" src={require(`../../assets/images/${props.path}/${props.items.id + 1}.jpg`)} />
                </div>
                <div className = "product-card-item__title">{props.items.title}</div>
                <div className = "product-card-item__price"></div>
                <div className="product-card-item__more"></div>
            </div>
        </>
    )
}

export default ProductCard