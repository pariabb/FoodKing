import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation();

    const [isVisible, setIsVisible] = useState(1);

    const toggleInfo = (value) => {
        if (value === isVisible) {
            setIsVisible(null);
        } else {
            setIsVisible(value);
        }
    };

    return (
        <>
            <div>
                <section className='page-img '>
                    <div className="container">
                        <div className="page-heading center">
                            <h1 className='mb-3' >{t("header.menu5")}</h1>
                            <p><Link to='/' className='home-link'>{t("header.menu1")}  <i className="fa-solid fa-greater-than"></i>  </Link> <span>{t("header.menu5")}</span> </p>
                        </div>
                    </div>
                </section>
                <section className='question-part text-center '>
                    <span>Frequently Ask Question</span>

                    <h1>Frequently Ask Question</h1>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-6 ">
                            <ul className='questions my-4'>
                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(1)}>
                                    ARE YOUR MENU PRICES THE SAME AS THOSE AT THE RESTAURANT?       
                                    <button className="toggle-button">{isVisible === 1 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 1 && (
                                    <div className="info">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                            by injected humour, or randomised words which don’t look even slightly believable.</p>
                                    </div>
                                )}

                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(2)}>
                                    CAN I ORDER FROM DIFFERENT RESTAURANT AT THE SAME TIME? 
                                    <button className="toggle-button">{isVisible === 2 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 2 && (
                                    <div className="info">
                                        <p>There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                                    </div>
                                )}

                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(3)}>
                                    Does Hub Support Both Elementor And WP Bakery Page Builder? 
                                    <button className="toggle-button">{isVisible === 3 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 3 && (
                                    <div className="info">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t
                                            look even slightly believable.</p>
                                    </div>
                                )}

                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(4)}>
                                    CAN I ORDER FROM DIFFERENT RESTAURANT AT THE SAME TIME? 
                                    <button className="toggle-button">{isVisible === 4 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 4 && (
                                    <div className="info">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even
                                            slightly believable.</p>
                                    </div>
                                )}

                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(5)}>
                                    Does Hub Support Both Elementor And WP Bakery Page Builder? 
                                    <button className="toggle-button">{isVisible === 5 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 5 && (
                                    <div className="info">
                                        <p>There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                                    </div>
                                )}

                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(6)}>
                                    ARE YOUR MENU PRICES THE SAME AS THOSE AT THE RESTAURANT? 
                                    <button className="toggle-button">{isVisible === 6 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 6 && (
                                    <div className="info">
                                        <p>There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                                    </div>
                                )}

                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default FAQ;
