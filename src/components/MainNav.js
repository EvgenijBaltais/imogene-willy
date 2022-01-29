import React from "react"
import { NavLink } from "react-router-dom"

import '../styles/mainNav.scss'

const MainNav = () => {

    return (
        <nav className="main-nav">
            <ul className = "main-nav-list">
                <li className = "main-nav-item">
                    <NavLink className = "main-nav-link" to = "/">
                        Главная
                    </NavLink>
                </li>
                <li className = "main-nav-item">
                    <NavLink className = "main-nav-link" to = "/">
                        Наборы
                    </NavLink>
                </li>
                <li className = "main-nav-item">
                    <NavLink className = "main-nav-link" to = "/">
                        Бонсай
                    </NavLink>
                </li>
                <li className = "main-nav-item">
                    <NavLink className = "main-nav-link" to = "/">
                        Шары и открытки
                    </NavLink>
                </li>
                <li className = "main-nav-item">
                    <NavLink className = "main-nav-link" to = "/contacts">
                        Контакты
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav