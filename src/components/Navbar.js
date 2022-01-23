import React from "react"
import { NavLink } from "react-router-dom"

import '../styles/navbar.scss'

import logo from '../assets/logo.png'

const Navbar = () => {

    return (
        <div className="navbar block-size">

            <div className = "main-logo">
                <img src = {logo} />
            </div>
            <div className = "main-nav">
                <ul className = "main-nav__ul">
                    <li className = "main-nav__li">
                        <NavLink to = "/" className="nav-link">Главная</NavLink>
                    </li>
                    <li className = "main-nav__li">
                        <NavLink to = "/catalog" className="nav-link">Каталог</NavLink>
                    </li>
                    <li className = "main-nav__li">
                        <NavLink to = "/giftsets" className="nav-link">Наборы</NavLink>
                    </li>
                    <li className = "main-nav__li">
                        <NavLink to = "/bonsai" className="nav-link">Бонсай</NavLink>
                    </li>
                    <li className = "main-nav__li">
                        <NavLink to = "/contacts" className="nav-link">Контакты</NavLink>
                    </li>
                </ul>
            </div>
            <div className = "main-phone">
                <a className = "main-phone-link" href = "tel:+79999999999">+7 (999) 999-99-99</a>
                <a className = "main-email-link" href = "mailto:test@mail.ru">test@mail.ru</a>
            </div>
        </div>
    )
}

export default Navbar