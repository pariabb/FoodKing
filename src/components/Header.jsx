import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { RiMenu4Line } from "react-icons/ri";
import { useCart } from 'react-use-cart';


const Header = () => {

    const { totalItems } = useCart();

    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const logout = () => {
        localStorage.setItem('adminlogin', 'false');
        localStorage.setItem('login', 'false');
        window.location.reload();
    }

    return (
        <>
            <nav className="header-top-wrapper  navbar-expand-lg  d-lg-block  d-sm-none py-1  ">
                <div className="container-fluid d-flex flex-row   justify-content-between">

                    <ul className="navbar-nav   ">

                        <li className="nav-item ms-2 ">
                            <a className="nav-link " href="#" role="button" aria-expanded="false">
                                100% Secure delivery without contacting the courier
                            </a>

                        </li>
                        <li className="nav-item  ms-4">
                            <a className="nav-link " href="#" role="button" aria-expanded="false">
                                <i className="fa-solid fa-truck"></i>   Track Your Order
                            </a>

                        </li>
                    </ul>

                    <ul className='navbar-nav icons   ' >
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

            <nav className="navbar navbar-expand-lg bg-body-tertiary my-3">
                <div className="container ">
                    <NavLink to='/' ><img className="navbar-brand " src='https://modinatheme.com/foodking/wp-content/uploads/2024/05/foodking-logo.svg'></img></NavLink>

                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <div className="header-left ms-5">
                            <ul className="navbar-nav me-auto mx-auto ms-5">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link active" aria-current="page" href="#">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/about' className="nav-link active" aria-current="page" href="#">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/shop' className="nav-link active" aria-current="page" href="#">Shop</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/blog' className="nav-link active" aria-current="page" href="#">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/faq' className="nav-link active" aria-current="page" href="#">FAQ's</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contact' className="nav-link active" aria-current="page" href="#">Contact Us</NavLink>
                                </li>

                            </ul>
                        </div>

                        <div className="header-right">

                            <NavLink to='/wishlist'> <i className="fa-solid fa-heart"></i></NavLink>
                            <NavLink className="nav-link active position-relative" to='/cart'><span><i className="fa-solid fa-basket-shopping"></i></span>
                                <span className="position-absolute translate-middle badge rounded-pill bg-dark cart-top d-flex justify-content-center align-items-center text-center">
                                    {totalItems}
                                    <span class="visually-hidden">unread messages</span>
                                </span></NavLink>

                            {localStorage.getItem("adminlogin") === 'true' ?

                                (<div className="dropdown ">
                                    <button className="btn btn-danger  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Hi,Pari
                                    </button>
                                    <ol className="dropdown-menu custom-dropdown-width mt-1 w-25">
                                        <li><NavLink className="btn text-success" to="/admin"><i className="fa-solid fa-user"></i></NavLink></li>
                                        <li><button className="btn btn-danger ms-2" onClick={logout}>Log out</button></li>
                                    </ol>
                                </div>)


                                : localStorage.getItem('login') === "true" ?<div className="dropdown ">
                                <button className="btn btn-danger  dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hi,   {localStorage.getItem('username')}
                                </button>
                                <ol className="dropdown-menu custom-dropdown-width mt-1 w-25">
                                    <li><NavLink className="btn" to="/admin"><i className="fa-solid fa-user"></i></NavLink></li>
                                    <li><button className="btn btn-danger ms-2" onClick={logout}>Log out</button></li>
                                </ol>
                            </div> : <NavLink to='/login' className='header-btn'>Login</NavLink>}

                            {localStorage.getItem('adminlogin') === 'true' ? <NavLink to='/dashboard' className='header-btn2'>Dashboard</NavLink> : ""}

                            <div className='menu-icon ' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><RiMenu4Line />
                            </div>
                        </div>
                    </div>

                </div>
            </nav>


            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <NavLink to='/' ><img className="navbar-brand me-3 mt-3" src='https://modinatheme.com/foodking/wp-content/uploads/2024/05/foodking-logo.svg'></img></NavLink>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body mt-1">
                    <h3>WE MAKE THE BEST BURGER <br /> IN YOUR TOWN</h3>

                    < div className="mini-pics d-flex flex-wrap gap-2 ">
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-2.jpg" alt="" />
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-3.jpg" alt="" />
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-4.jpg" alt="" />
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-5.jpg" alt="" />
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-6.jpg" alt="" />
                        <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/gallery-1.jpg" alt="" />
                    </div>


                    <a className='examplea my-3'>info@example.com</a>
                    <h4>+1718-904-4450</h4>

                    <ul className='icon-list '>
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
    )
}

export default Header