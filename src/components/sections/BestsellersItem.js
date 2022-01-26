import React from "react"
import { NavLink } from "react-router-dom"

const BestsellersItem = (props) => {

    return (
        <>
            <div className="bestsellers-item">
                <div className = "bestsellers-item__pic-w">

                    <img className = "bestsellers-item__pic" src={require(`../../assets/images/bestsellers/${props.items.img}.jpg`)} />
                </div>
                <div className = "bestsellers-item__title">{props.items.title}</div>
                <div className = "bestsellers-item__price"></div>
                <div className="bestsellers-item__more"></div>
            </div>
        </>
    )
}

export default BestsellersItem