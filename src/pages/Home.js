import React from "react";

import MainPageTop from "../components/pagesArts/MainPageTop";
import Advices from "../components/sections/Advices";
import Bestsellers from "../components/sections/Bestsellers";
import NewProducts from "../components/sections/NewProducts";
import ShopCategories from "../components/sections/ShopCategories";
import Subscribe from "../components/sections/Subscribe";
import WhyWe from "../components/sections/WhyWe";

const Home = () => {

    return (
        <>
            <MainPageTop />
            <Bestsellers />
            <WhyWe />
            <ShopCategories />
            <NewProducts />
            <Advices />
            <Subscribe/>
        </>
    )
}

export default Home