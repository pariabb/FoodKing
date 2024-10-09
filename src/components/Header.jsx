import React, { useEffect, useTransition } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiMenu4Line } from 'react-icons/ri';
import { useCart } from 'react-use-cart';
// import i18next from '../i18n/i18next';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';
import { IoSunny, IoMoon } from "react-icons/io5";

const Header = () => {
    const { totalItems } = useCart();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const logout = () => {
        localStorage.setItem('adminlogin', 'false');
        localStorage.setItem('login', 'false');
        window.location.reload();
    };

    const isLoggedIn = localStorage.getItem('login') === 'true';
    const isAdmin = localStorage.getItem('adminlogin') === 'true';

    const changeLang = (lang) => {
        i18next.changeLanguage(lang)
        localStorage.setItem('i18nextLng', lang); 
    }

    const { t } = useTranslation();

    const [mode, setMode] = useContext(ModeContext);


    return (
        <>
            <nav className="header-top-wrapper navbar-expand-lg d-lg-block d-sm-none py-1">
                <div className="container-fluid d-flex flex-row justify-content-between">
                    <ul className="navbar-nav">
                        <li className="nav-item ms-2">
                            <a className="nav-link" href="#" role="button" aria-expanded="false">
                                {t("header.text1")}                            </a>
                        </li>
                        <li className="nav-item ms-4">
                            <a className="nav-link" href="#" role="button" aria-expanded="false">
                                <i className="fa-solid fa-truck"></i> {t("header.text2")}
                            </a>
                        </li>
                    </ul>
                    <ul className='navbar-nav icons'>
                        <li>
                            <a href="https://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="https://x.com/"><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://pinterest.com/"><i className="fa-brands fa-pinterest"></i></a>
                        </li>
                        <li>
                            <a href="https://vimeo.com/"><i className="fa-brands fa-vimeo-v"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container my-3">
                    <NavLink to='/'>
                        <img className="navbar-brand" src='https://modinatheme.com/foodking/wp-content/uploads/2024/05/foodking-logo.svg' alt="Logo" />
                    </NavLink>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <div className="header-left ms-3">
                            <ul className="navbar-nav me-auto mx-auto ms-5">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link active" aria-current="page">{t("header.menu1")}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/about' className="nav-link active" aria-current="page">{t("header.menu2")}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/shop' className="nav-link active" aria-current="page">{t("header.menu3")}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/blog' className="nav-link active" aria-current="page">{t("header.menu4")}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/faq' className="nav-link active" aria-current="page">{t("header.menu5")}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contact' className="nav-link active" aria-current="page">{t("header.menu6")}</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="header-right">
                            <div className="dropdown lang">
                                <button className="btn " style={{ border: 'none' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-language "></i>
                                </button>
                                <ol className="dropdown-menu custom-dropdown-width mt-1 w-25">
                                    <li><button className='btn btn-success mb-1 ' onClick={() => changeLang('az')} >AZ</button></li>
                                    <li><button className='btn btn-danger ' onClick={() => changeLang('en')} >EN</button> </li>
                                </ol>
                            </div>
                            <button onClick={() => {
                                mode === "light" ? setMode("dark") : setMode("light");
                                mode === "light" ? localStorage.setItem("mode", "dark") : localStorage.setItem("mode", "light");
                            }} type="button" className="btn mode btn-success text-center align-items-center justify-content-center " style={{ paddingTop: "0" }}>
                                {mode === "light" ? <IoMoon className='mode-icons' /> : <IoSunny className='mode-icons' />}
                            </button>
                            <NavLink to='/wishlist' className='wish'>
                                <i className="fa-solid fa-heart"></i>
                            </NavLink>
                            <NavLink className="nav-link active position-relative header-cart" to='/cart'>
                                <span><i className="fa-solid fa-basket-shopping"></i></span>
                                <span className="position-absolute translate-middle badge rounded-pill bg-dark cart-top d-flex justify-content-center align-items-center text-center">
                                    {(isLoggedIn || isAdmin) ? (totalItems > 0 ? totalItems : 0) : 0}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </NavLink>


                            {isAdmin ? (
                                <div className="dropdown">
                                    <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {t('header.salam')},Pari
                                    </button>
                                    <ol className="dropdown-menu custom-dropdown-width mt-1 w-25">
                                        <li><button className="btn btn-success ms-2" onClick={logout}>{t("header.logout")}</button></li>
                                    </ol>
                                </div>
                            ) : isLoggedIn ? (
                                <div className="dropdown">
                                    <button className="btn btn-danger dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('header.salam')}, {localStorage.getItem('username')}
                                    </button>
                                    <ol className="dropdown-menu custom-dropdown-width mt-1 w-25">
                                        <li><button className="btn btn-success ms-4" onClick={logout}>{t("header.logout")}</button></li>
                                    </ol>
                                </div>
                            ) : (
                                <NavLink to='/login' className='header-btn'>{t("header.login")}</NavLink>
                            )}

                            {isAdmin && <NavLink to='/dashboard' className='header-btn2'>{t("header.dashboard")}</NavLink>}

                            <div className='menu-icon' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <RiMenu4Line />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <NavLink to='/'>
                        <img className="navbar-brand me-3 mt-3" src='https://modinatheme.com/foodking/wp-content/uploads/2024/05/foodking-logo.svg' alt="Logo" />
                    </NavLink>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body mt-1">
                    <ul className="navbar-nav me-auto mx-auto ms-1 d-none">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active" aria-current="page">{t("header.menu1")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link active" aria-current="page">{t("header.menu2")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/shop' className="nav-link active" aria-current="page">{t("header.menu3")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/blog' className="nav-link active" aria-current="page">{t("header.menu4")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/faq' className="nav-link active" aria-current="page">{t("header.menu5")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className="nav-link active" aria-current="page">{t("header.menu6")}</NavLink>
                        </li>
                    </ul>
                    <div className="header-right d-none ">
                        <div className="dropdown my-2">
                            <button className="btn " style={{ border: 'none' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-language "></i>
                            </button>
                            <ol className="dropdown-menu custom-dropdown-width mt-1 w-25">
                                <li><button className='btn btn-success mb-1 ' onClick={() => changeLang('az')} >AZ</button></li>
                                <li><button className='btn btn-danger ' onClick={() => changeLang('en')} >EN</button> </li>
                            </ol>
                        </div>
                        <button onClick={() => {
                            mode === "light" ? setMode("dark") : setMode("light");
                            mode === "light" ? localStorage.setItem("mode", "dark") : localStorage.setItem("mode", "light");
                        }} type="button" className="btn me-3  btn-success text-center align-items-center justify-content-center " style={{ paddingTop: "0" }}>
                            {mode === "light" ? <IoMoon className='mode-icons' /> : <IoSunny className='mode-icons' />}
                        </button>
                        <NavLink to='/wishlist'>
                            <i className="fa-solid fa-heart"></i>
                        </NavLink>
                        <NavLink className="nav-link active position-relative my-4" to='/cart'>
                            <span><i className="fa-solid fa-basket-shopping"></i></span>
                            <span className="position-absolute translate-middle badge rounded-pill bg-dark cart-top d-flex justify-content-center align-items-center text-center">
                                {(isLoggedIn || isAdmin) ? (totalItems > 0 ? totalItems : 0) : 0}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </NavLink>
                        {isAdmin && <NavLink to='/dashboard' className='header-btn2 mb-3'>{t("header.dashboard")}</NavLink>}

                    </div>
                    <h6 className='mb-2'>{t("header.text3")}</h6>
                    <div className="mini-pics d-flex flex-wrap gap-2">
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-2.jpg" alt="" />
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-3.jpg" alt="" />
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-4.jpg" alt="" />
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-5.jpg" alt="" />
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-6.jpg" alt="" />
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-1.jpg" alt="" />
                    </div>
                    <h4>CONTACT INFO</h4>
                    <h5><i className="fa-solid fa-location-dot text-danger me-2 mb-2"></i>  MAIN STREET, MELBOURNE, AUSTRALI</h5>
                    <h5><i className="fa-solid fa-envelope text-danger me-2 mb-2"></i>INFO@FOODKING.COM</h5>
                    <h5><i className="fa-solid fa-clock text-danger me-2 mb-2"></i>MOD-FRIDAY, 09AM -05PM   </h5>
                    <h5><i className="fa-solid fa-phone text-danger me-2 mb-2"></i>+11002345909   </h5>
                    <ul className='icon-list'>
                        <li>
                            <a href="https://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="https://x.com/"><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://pinterest.com/"><i className="fa-brands fa-pinterest"></i></a>
                        </li>
                        <li>
                            <a href="https://vimeo.com/"><i className="fa-brands fa-vimeo-v"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header
