import React from "react"

import '../../styles/pagesArts/mainPageTop.scss'
import mainPic from '../../assets/images/pages/main-page.png'
import LogoSection from "../LogoSection"

const MainPageTop = () => {

    return (
        <div className="main-page-art" style = {{backgroundImage: `url(${mainPic})`}}>
            <div class = "main-page-art__shadow">

                <LogoSection />
            </div>
        </div>
    )
}

export default MainPageTop