import React from "react";
import '../styles/pagesArts/additionalPageTop.scss'
import '../styles/product.scss'
import AdditionalPageTop from "../components/pagesArts/AdditionalPageTop";

const Product = (props) => {


    console.log(props)

    return (
        <>
        <AdditionalPageTop />
            <div className="product">
                <div className="product-images">
                    <div className="product-pic"></div>
                    <div className="product-gallery-w">
                        <div className="product-gallery"></div>
                    </div>
                </div>
                <div className="product-description"></div>
            </div>
        </>
    )
}

export default Product