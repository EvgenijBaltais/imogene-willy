import React from "react";
import { NavLink } from "react-router-dom";

import visa from '../../assets/images/icons/visa.svg'

import '../../styles/sections/footer.scss'

const Footer = () => {

    return (

        <footer className="footer">
            <div className="footer-inside section-size">
                <div className = "footer-block">
                    <h3 className="footer-title">MIXOLOGY & CRAFT</h3>
                    <div className = "footer-block_content">
                        <span>Everything a cocktail lover can ask for made by the pros</span>
                    </div>
                </div>
                <div className = "footer-block">
                    <h3 className="footer-title">MORE ABOUT US</h3>
                    <div className = "footer-block_content">
                        <ul className="footer-block_list">
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Our Story</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">F.A.Q</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Privacy Policy</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Refund Policy</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Terms of Service</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Contact us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = "footer-block">
                    <h3 className="footer-title">SHOP MIXOLOGY & CRAFT</h3>
                    <div className = "footer-block_content">
                    <ul className="footer-block_list">
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">All Products</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Display Stand Kits</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Portable Kits</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Starter Kits</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Gift Ideas</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Bar Accessories</NavLink>
                            </li>
                            <li className="footer-block_item">
                                <NavLink className="footer-block_link" to = "/">Whiskey Gift Sets</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = "footer-block">
                    <h3 className="footer-title">GET SOCIAL</h3>
                    <div className = "footer-block_content">
                        Everything a cocktail lover can ask for made by the pros
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-inside section-size">
                    <div className = "footer-bottom__info">
                        <span>© 2022 Mixology & Craft | DO WHAT YOU LOVE BEST</span>
                    </div>
                    <div className = "payment-icons">
                        <img className = "payment-icons__item" src = {visa} />
                        <img className = "payment-icons__item" src = {visa} />
                        <img className = "payment-icons__item" src = {visa} />
                        <img className = "payment-icons__item" src = {visa} />
                        <img className = "payment-icons__item" src = {visa} />
                        <img className = "payment-icons__item" src = {visa} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer