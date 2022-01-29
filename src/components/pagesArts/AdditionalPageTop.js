import React from "react"

import '../../styles/pagesArts/additionalPageTop.scss'
import mainPic from '../../assets/images/pages/main-page.png'
import LogoSection from "../LogoSection"
import MainNav from "../MainNav"


const AdditionalPageTop = () => {

    return (
        <div className="additional-page-art" style = {{backgroundImage: `url(${mainPic})`}}>
            <div className = "additional-page-art__shadow">

                <LogoSection />
                <MainNav />

                <div className = "additional-page-slogan">
                    <div className = "additional-page-slogan__big">Яркие необычные подарки</div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalPageTop