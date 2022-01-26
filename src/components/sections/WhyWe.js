import React from "react"

import '../../styles/sections/whyWe.scss'

const WhyWe = (props) => {

    const advantages = [1,2,3,4]

    re

    function whyWe() {
        return (

        )
    }

    for (let i = 0; i < advantages.length; i++) {
        whyWe += "<div className='advantage'></div>"
    }

    console.log(whyWe)

    return (
        <div className="why-we">
            {whyWe}
        </div>
    )
}

export default WhyWe