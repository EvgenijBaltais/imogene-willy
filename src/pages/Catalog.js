import React from "react";
import '../styles/main-catalog.scss'
import '../styles/pagesArts/additionalPageTop.scss'
import AdditionalPageTop from "../components/pagesArts/AdditionalPageTop";

const Catalog = () => {

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
                                <label for="checkbox-id-1">Bartender Kits</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-2" />
                                <label for="checkbox-id-2">Glassware</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-3" />
                                <label for="checkbox-id-3">Travel Kits</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-4" />
                                <label for="checkbox-id-4">Whiskey Sets</label>
                            </li>
                        </ul>
                    </div>

                    <div className="catalog-select-block">
                        <span className="catalog-select__title">DISPLAY STAND FINISH</span>
                        <ul className="catalog-select__list">
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-5" />
                                <label for="checkbox-id-5">Bamboo</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-6" />
                                <label for="checkbox-id-6">Black</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-7" />
                                <label for="checkbox-id-7">Mahogany</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-8" />
                                <label for="checkbox-id-8">Rustic Wood</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-9" />
                                <label for="checkbox-id-9">Stainless Steel</label>
                            </li>
                        </ul>
                    </div>

                    <div className="catalog-select-block">
                        <span className="catalog-select__title">KIT COLOR</span>
                        <ul className="catalog-select__list">
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-11" />
                                <label for="checkbox-id-10">Copper</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-12" />
                                <label for="checkbox-id-12">Gold</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-13" />
                                <label for="checkbox-id-13">Gunmetal Black</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-14" />
                                <label for="checkbox-id-14">Stainless Steel</label>
                            </li>
                        </ul>
                    </div>

                    <div className="catalog-select-block">
                        <span className="catalog-select__title">BEST FOR</span>
                        <ul className="catalog-select__list">
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-15" />
                                <label for="checkbox-id-15">Beginners</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-16" />
                                <label for="checkbox-id-16">Gifting</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-17" />
                                <label for="checkbox-id-17">Professionals</label>
                            </li>
                            <li className="catalog-select__item">
                                <input className="custom-checkbox" type="checkbox" id="checkbox-id-18" />
                                <label for="checkbox-id-18">Travel</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="catalog-item">

                </div>
            </div>
        </>
    )
}

export default Catalog