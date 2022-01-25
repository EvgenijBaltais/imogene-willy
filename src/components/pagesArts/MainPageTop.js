import React from "react"

import '../../styles/pagesArts/mainPageTop.scss'
import mainPic from '../../assets/images/pages/main-page.png'
import LogoSection from "../LogoSection"
import MainNav from "../MainNav"


const MainPageTop = () => {

    return (
        <div className="main-page-art" style = {{backgroundImage: `url(${mainPic})`}}>
            <div className = "main-page-art__shadow">

                <LogoSection />
                <MainNav />

                <div className = "main-page-slogan">
                    <div className = "main-page-slogan__big">Яркие необычные подарки</div>
                    <div className = "main-page-slogan__dop">Для тех кто любит удивлять</div>
                    <button className = "main-page-slogan__btn">Выбрать</button>
                </div>
            </div>
        </div>
    )
}

export default MainPageTop