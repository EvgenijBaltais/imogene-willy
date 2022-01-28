import React, {useState} from "react"

import '../../styles/sections/newProducts.scss'
import ProductCard from "./ProductCard"

const NewProducts = () => {

    const imgPathName = 'new_products'

    const new_products = [
        {id: 0, title: 'Silver Bartender Kit with Rustic Wood Stand', price: '8900'},
        {id: 1, title: 'Whiskey Glasses Gift Set of 4 Rocks Glasses with a Classy Gift Box', price: '4900'},
        {id: 2, title: 'Gun Metal Black Cocktail Shaker Bartender Kit with Stylish Mahogany Stand', price: '5300'},
        {id: 3, title: 'Whiskey Stones Gift Set for Men and Women with Wooden Box and Velvet Bag', price: '2800'}
    ] 
    
    //new Array(4).fill('').map((_, i) => (i))

    return (
        <section className="section new-section">
            <h2 className="section-title">Выбор покупателей</h2>
            <p className="section-info">Удивите своих друзей оригинальным подарком</p>
            <div className="new section-size">
                {new_products.map((item, index) => <ProductCard items = {item} path = {imgPathName} key = {index} />)}
            </div>
        </section>
    )
}

export default NewProducts