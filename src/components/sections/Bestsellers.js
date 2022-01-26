import React, {useState} from "react"

import '../../styles/sections/bestsellers.scss'
import BestsellersItem from "./BestsellersItem"

const Bestsellers = () => {

    const bestsellers = [
        {id: 0, title: 'Silver Bartender Kit with Rustic Wood Stand', img: 'crate', price: '8900'},
        {id: 1, title: 'Whiskey Glasses Gift Set of 4 Rocks Glasses with a Classy Gift Box', img: 'js', price: '4900'},
        {id: 2, title: 'Gun Metal Black Cocktail Shaker Bartender Kit with Stylish Mahogany Stand', img: 'bar', price: '5300'},
        {id: 3, title: 'Whiskey Stones Gift Set for Men and Women with Wooden Box and Velvet Bag', img: 'temp', price: '2800'}
    ] 
    
    //new Array(4).fill('').map((_, i) => (i))

    return (
        <section className="bestsellers-section">
            <h2 className="bestsellers-title">Выбор покупателей</h2>
            <p className="bestsellers-info">Удивите своих друзей оригинальным подарком</p>
            <div className="bestsellers section-size">
                {bestsellers.map((item, index) => <BestsellersItem items = {item} key = {index} />)}
            </div>
        </section>
    )
}

export default Bestsellers