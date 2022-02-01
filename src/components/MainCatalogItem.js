import React from "react";

const MainCatalogItem = (props) => {

    return (
        <>
            <div className="main-catalog-item">
                <div className = "main-catalog-item__pic" style = {{backgroundImage: require(`../assets/images/products/${props.products.id}.jpg`)}}></div>
                <div className = "main-catalog-item__title">Bartender Kit in Gun Metal Black with Rustic Wood Stand</div>
                <div className = "main-catalog-item__price">$79.99</div>
            </div>
        </>
    )
}

export default MainCatalogItem