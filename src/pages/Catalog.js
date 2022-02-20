import React, {useState} from "react";
import '../styles/main-catalog.scss'
import '../styles/pagesArts/additionalPageTop.scss'
import AdditionalPageTop from "../components/pagesArts/AdditionalPageTop";
import MainCatalogItem from "../components/MainCatalogItem";
import Product_form from "../components/Product_form";

import products from '../products'

const Catalog = () => {

    let [form_active, changeForm] = useState(0)

    let updateData = (value) => {

       this.setState(state => {
            return {form_active : value}
       })
    }

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

                    {products.map((item, index) => <MainCatalogItem updateData={updateData} products = {item} key = {item.id} />)}

                </div>
            </div>

            {form_active ? <Product_form /> : ''}
        </>
    )
}

export default Catalog