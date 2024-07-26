import React from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Contact = () => {
    return (
        <>
            <section className='page-img '>
                <div className="container">
                    <div className="page-heading center">
                        <h1 className='mb-3' >Contact Us</h1>
                        <p><Link to='/' className='home-link'>Home   <i className="fa-solid fa-greater-than"></i>  </Link> <span>Contact Us</span> </p>
                    </div>
                </div>
            </section>

            <div className="get-in-touch mt-5">
                <div className="container">
                    <h1 className='text-center mt-5'>GET IN TOUCH WITH US</h1>
                    <p className='text-center mt-3'>Get in touch to discuss your employee wellbeing needs today. Please give us a call, <br />
                        drop us an email or fill out the contact form and we’ll get back to you.</p>
                    <div className="row ">
                        <div className="main col-12  d-flex justify-content-center my-5 ">
                        <div className="mini-divs d-flex flex-column justify-content-center align-items-center">
                            <div className="address-icon"><FaBuilding className='icon' /></div>

                            <h4>ADDRESS</h4>
                            <p>Box 565, Pinney's Beach, Charlestown,</p>
                            <p>    Nevis, West Indies, Caribbean</p>
                            <span>
                                CHECK LOCATION</span>
                        </div>
                        <div className="mini-divs d-flex flex-column justify-content-center align-items-center">
                      <div className="address-icon"><FaPhoneAlt className='icon'/></div>  

                        <h4>GET IN TOUCH</h4>
                        <p>Mobile: 084 3456 19 89</p>
                        <p>    Hotline: (850) 435-4155  </p>
                        <p>E-mail: hello@Fazfood.com</p>
          
                        </div>
                        <div className="mini-divs d-flex flex-column justify-content-center align-items-center mb-2">
                      <div className="address-icon"><CiClock2 className='icon'/></div>  

                        <h4>HOUR OF OPERATION</h4>
                        <p>Monday-Friday: 8am-5pm </p>
                        <p>  Saturday: 9am-Midday </p>
                         <span> SUNDAY: CLOSE</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>)
}

export default Contact