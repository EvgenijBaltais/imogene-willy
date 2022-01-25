import React from "react"
import { NavLink } from "react-router-dom"

import '../styles/components/logoSection.scss'
import logo from '../assets/images/logo.png'

const LogoSection = () => {

    return (
        <div className="logoBar block-size">
            <div className="search-section">
                <input type = "text" placeholder="Поиск" className="search-input" />
            </div>
            <div className = "main-logo">
                <NavLink to = "/">
                    <img className = "main-logo__pic" src = {logo} />
                </NavLink>
            </div>
            <div className = "main-phone">
                <a className = "main-phone-link" href = "tel:+79999999999">+7 (999) 999-99-99</a>
                <a className = "main-email-link" href = "mailto:test@mail.ru">test@mail.ru</a>
            </div>
        </div>
    )
}

export default LogoSection