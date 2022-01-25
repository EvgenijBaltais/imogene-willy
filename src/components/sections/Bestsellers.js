import React, {useState} from "react"

import '../../styles/sections/bestsellers.scss'
import BestsellersItem from "./BestsellersItem"

const Bestsellers = () => {

    const bestsellers = new Array(4).fill('').map((_, i) => (i))

    return (
        <div className="bestsellers section-size">

            {bestsellers.map((item, index) => <BestsellersItem key = {index} />)}

        </div>
    )
}

export default Bestsellers