import React from "react"

import '../../styles/sections/shopCategories.scss'

const ShopCategories = (props) => {

    const shopCategories = [

        {id: 1, name: '1'},
        {id: 2, name: '2'},
        {id: 3, name: '3'}
    ]

    return (
        <section className="section shop-categories-section">

            <h2 className="section-title">Почему мы?</h2>
            <p className="section-info">Преимущеста работы с нами</p>

            <div className="shop-categories section-size">

                {shopCategories.map(item => 
                    <div className='shop-category' 
                        key = {item.id}
                        style = {{backgroundImage: `url(${require('../../assets/images/categories/' + item.name + '.png')})`}}
                    ></div>)}
            </div>
        </section>
    )
}

export default ShopCategories