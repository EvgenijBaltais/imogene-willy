import React from "react"

import '../../styles/sections/whyWe.scss'

const WhyWe = (props) => {

    const advantages = [

        {id: 1, name: '1'},
        {id: 2, name: '2'},
        {id: 3, name: '3'},
        {id: 4, name: '4'}
    ]

    return (
        <section className="section why-we-section">

            <h2 className="section-title">Почему мы?</h2>
            <p className="section-info">Преимущеста работы с нами</p>

            <div className="why-we section-size">

                {advantages.map(item => 
                    <div className='advantage' 
                        key = {item.id}
                        style = {{backgroundImage: `url(${require('../../assets/images/advantages/' + item.name + '.png')})`}}
                    ></div>)}
            </div>
        </section>
    )
}

export default WhyWe