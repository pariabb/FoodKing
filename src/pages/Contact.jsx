import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaPhoneAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <section className='page-img '>
                <div className="container">
                    <div className="page-heading center">
                        <h1 className='mb-3'>Contact Us</h1>
                        <p><Link to='/' className='home-link'>Home <i className="fa-solid fa-greater-than"></i></Link> <span>Contact Us</span></p>
                    </div>
                </div>
            </section>
           <div className="contact-main">
                <div className="get-in-touch mt-5">
                <div className="container">
                    <h1 className='text-center mt-5'>GET IN TOUCH WITH US</h1>
                    <p className='text-center mt-3'>
                        Get in touch to discuss your employee wellbeing needs today. Please give us a call, 
                        drop us an email, or fill out the contact form and we’ll get back to you.
                    </p>
                    <div className="row ">
                        <div className="main col-12 d-flex justify-content-center my-5">
                            <div className="mini-divs d-flex flex-column justify-content-center align-items-center">
                                <div className="address-icon"><FaBuilding className='icon' /></div>
                                <h4>ADDRESS</h4>
                                <p>Box 565, Pinney's Beach, Charlestown,</p>
                                <p>Nevis, West Indies, Caribbean</p>
                                <span>CHECK LOCATION</span>
                            </div>
                            <div className="mini-divs d-flex flex-column justify-content-center align-items-center">
                                <div className="address-icon"><FaPhoneAlt className='icon' /></div>
                                <h4>GET IN TOUCH</h4>
                                <p>Mobile: 084 3456 19 89</p>
                                <p>Hotline: (850) 435-4155</p>
                                <p>E-mail: hello@Foodking.com</p>
                            </div>
                            <div className="mini-divs d-flex flex-column justify-content-center align-items-center mb-2">
                                <div className="address-icon"><CiClock2 className='icon' /></div>
                                <h4>HOUR OF OPERATION</h4>
                                <p>Monday-Friday: 8am-5pm</p>
                                <p>Saturday: 9am-Midday</p>
                                <span>SUNDAY: CLOSE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-section">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-7">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512745.962994621!2d-124.59466426655074!3d37.151469226127034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sKaliforniya%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2saz!4v1726599085246!5m2!1str!2saz"
                                width="700"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-form">
                                <h2>Send us a message</h2>
                                <p>If you have any questions or concerns, feel free to contact us by filling out the form below.</p>
                                {submitted ? (
                                    <div className="thank-you-message">
                                        <h3>Thank you for your message!</h3>
                                        <p>We will get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="form">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-control my-2"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control mb-2"
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Subject"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="form-control mb-2"
                                                placeholder="Message"
                                                rows="6"
                                                required
                                            />
                                        </div>
                                        <div className="form-group  text-center my-3">
                                            <button type="submit" className="btn btn-primary">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        
        </>
    );
};

export default Contact;
