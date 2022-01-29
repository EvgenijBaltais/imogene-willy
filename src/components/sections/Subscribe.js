import React, {useState} from "react"

import '../../styles/sections/subscribe.scss'

const Subscribe = () => {

    return (
        <section className="subscribe">
            <div className = "subscribe-pic"></div>
            <div className="subscribe-block">
                <h2 className = "subscribe-title">Sign up and save</h2>
                <p className = "subscribe-text">Join our e-list and get 10% off your next order</p>

                <form action = "" className = "subscribe-form" id = "subscribe-form">
                    <div className = "subscribe-form-block">
                        <input type = "text" name = "subscribe-form__input" className="subscribe-form__input" placeholder = "Ваш email" />
                        <button className = "subscribe-form__btn">Join</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Subscribe