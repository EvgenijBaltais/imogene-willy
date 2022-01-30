import React from "react";
import AdditionalPageTop from "../components/pagesArts/AdditionalPageTop";
import '../styles/contacts.scss'
import '../styles/pagesArts/additionalPageTop.scss'

const Contacts = () => {

    return (
        <div className = "contacts-wrapper">

            <AdditionalPageTop />

            <div className="contacts-information section-size">
                <div className="contacts-window">
                    <p className="contacts-window__maintitle">Mixology & Craft</p>
                    <p className="contacts-window__title">Свяжитесь с нами!</p>
                    <a className="contacts-window__link" href = "mailto:test@mail.ru">test@mail.ru</a>
                    <a className="contacts-window__link" href = "tel:+79999999999">+7 (999) 999-99-99</a>
                </div>
            </div>

            <div className="contacts-form-block">

                <div className="form-block__info">
                    <p className="form-block__text">
                        Do you have a question about Mixology and Craft products or need help with an order?
                    </p>
                    <p className="form-block__text">
                        Customer happiness is our top priority so please send us an email anytime at 
                        support@mixologyandcraft.com or write your concern below.
                    </p>
                    <p className="form-block__text">
                        Mixology and Craft
                    </p>
                    <p className="form-block__text">
                        85 West Street, Suite 4
                    </p>
                    <p className="form-block__text">
                        Walpole, MA 02081
                    </p>
                </div>
                <div className="form-block__form">
                    <form name = "contacts-form" className="contacts-form">
                        <label className="contacts-form-label">
                            <span className="contacts-form-span">Имя:</span>
                            <input type = "text" id = "contacts-name" className="contacts-form-input" />
                        </label>
                        <label className="contacts-form-label">
                            <span className="contacts-form-span">Email:</span>
                            <input type = "text" id = "contacts-email" className="contacts-form-input" />
                        </label>
                        <label className="contacts-form-label">
                            <span className="contacts-form-span">Телефон:</span>
                            <input type = "text" id = "contacts-phone" className="contacts-form-input" />
                        </label>
                        <span className="contacts-form-span">Текст сообщения:</span>
                        <textarea className="contacts-form-textarea"></textarea>
                        <button className="contacts-form-btn">Отправить!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts