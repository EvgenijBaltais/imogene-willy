import React, { useEffect, useRef } from "react";
import '../styles/product_form.scss'

class Product_form extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.body_lock()
    }

    componentWillUnmount() {
        this.body_unlock()
    }

    body_lock() {

        let body = document.body;
        if (!body.classList.contains('scroll-locked')) {
            let bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            body.classList.add('scroll-locked');
            body.style.top = "-" + bodyScrollTop + "px";
            body.setAttribute("data-popup-scrolltop", bodyScrollTop)
        }
    }
    
    body_unlock() {
        let body = document.body;
        if (body.classList.contains('scroll-locked')) {
            let bodyScrollTop = document.body.getAttribute("data-popup-scrolltop");
            body.classList.remove('scroll-locked');
            body.style.top = "";
            body.removeAttribute("data-popup-scrolltop")
            window.scrollTo(0, bodyScrollTop)
        }
    }

    render() {
        return (

            <div className="overlay">

                <div className="product-form-w">
                    <div className="close-product-form" onclick = ""></div>

                    <div className="foto-slider"></div>
                    <div className="form-content"></div>
                    <form action="">

                    </form>
                </div>
            </div>
        )
    }
}

export default Product_form