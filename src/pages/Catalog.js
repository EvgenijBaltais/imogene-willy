import React from "react";
import '../styles/main-catalog.scss'
import '../styles/pagesArts/additionalPageTop.scss'
import AdditionalPageTop from "../components/pagesArts/AdditionalPageTop";
import MainCatalogItem from "../components/MainCatalogItem";

const Catalog = () => {


    const products = [
        {id: 0, title: 'Silver Bartender Kit with Rustic Wood Stand', price: '8900'},
        {id: 1, title: 'Whiskey Glasses Gift Set of 4 Rocks Glasses with a Classy Gift Box', price: '4900'},
        {id: 2, title: 'Gun Metal Black Cocktail Shaker Bartender Kit with Stylish Mahogany Stand', price: '5300'},
        {id: 3, title: 'Whiskey Stones Gift Set for Men and Women with Wooden Box and Velvet Bag', price: '2800'}
    ] 

    return (
        <>
            <AdditionalPageTop />
            <div className = "main-catalog section-size">
                <div className="catalog-select">
                    <div className="catalog-select-block">
                        <span className="catalog-select__title">CATEGORY</span>
                        <ul className="catalog-select__list">
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-1" />
                                <label htmlFor="checkbox-id-1">Bartender Kits</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-2" />
                                <label htmlFor="checkbox-id-2">Glassware</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-3" />
                                <label htmlFor="checkbox-id-3">Travel Kits</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-4" />
                                <label htmlFor="checkbox-id-4">Whiskey Sets</label>
                            </li>
                        </ul>
                    </div>

                    <div className="catalog-select-block">
                        <span className="catalog-select__title">DISPLAY STAND FINISH</span>
                        <ul className="catalog-select__list">
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-5" />
                                <label htmlFor="checkbox-id-5">Bamboo</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-6" />
                                <label htmlFor="checkbox-id-6">Black</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-7" />
                                <label htmlFor="checkbox-id-7">Mahogany</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-8" />
                                <label htmlFor="checkbox-id-8">Rustic Wood</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-9" />
                                <label htmlFor="checkbox-id-9">Stainless Steel</label>
                            </li>
                        </ul>
                    </div>

                    <div className="catalog-select-block">
                        <span className="catalog-select__title">KIT COLOR</span>
                        <ul className="catalog-select__list">
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-11" />
                                <label htmlFor="checkbox-id-10">Copper</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-12" />
                                <label htmlFor="checkbox-id-12">Gold</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-13" />
                                <label htmlFor="checkbox-id-13">Gunmetal Black</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-14" />
                                <label htmlFor="checkbox-id-14">Stainless Steel</label>
                            </li>
                        </ul>
                    </div>

                    <div className="catalog-select-block">
                        <span className="catalog-select__title">BEST FOR</span>
                        <ul className="catalog-select__list">
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-15" />
                                <label htmlFor="checkbox-id-15">Beginners</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-16" />
                                <label htmlFor="checkbox-id-16">Gifting</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-17" />
                                <label htmlFor="checkbox-id-17">Professionals</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-18" />
                                <label htmlFor="checkbox-id-18">Travel</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-catalog-items">

                    {products.map((item, index) => <MainCatalogItem products = {item} key = {index} />)}

                </div>
            </div>
        </>
    )
}

export default Catalog