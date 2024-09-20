import React from 'react';
import { Link } from 'react-router-dom';
import Burger from '../assets/pic/about/burger-1.png'
import Burger_text from '../assets/pic/home_folder/burger-text.png'



const About = () => {
    return (
        <div className='about-main'>
            <section className='page-img '>
                <div className="container">
                    <div className="page-heading center">
                        <h1 className='mb-3' >About Us</h1>
                        <p><Link to='/' className='home-link'>Home   <i className="fa-solid fa-greater-than"></i>  </Link> <span>About Us</span> </p>
                    </div>
                </div>
            </section>

            <section className='about-description py-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4  mt-5">
                        <img
                                src={Burger_text}
                                alt="About Us"
                                className="img-fluid burger-text " 
                            />
                            <img
                                src={Burger}
                                alt="About Us"
                                className="img-fluid"
                            />
                            
                        </div>
                        <div className="col-lg-6 mb-5">
                            <h2 className='mb-4 text-danger'>Welcome to FoodKing</h2>
                            <p>
                                We are committed to providing the best food experience, with quality ingredients and customer satisfaction at the heart of everything we do.
                            </p>
                            <p>
                                With a variety of dishes, we ensure that every meal is a delightful experience. Our chefs are experts in crafting food that not only tastes great but is also healthy and fresh.
                            </p>
                            <Link to='/shop' className='home-btn'>
                                View Our Menu
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='why-choose-us py-5 '>
                <div className="container text-center">
                    <h2 className='mb-5'>Why Choose Us?</h2>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <i className="fa-solid fa-utensils fa-3x mb-3"></i>
                            <h4>Quality Food</h4>
                            <p>Our ingredients are sourced from the best suppliers to ensure the highest quality food.</p>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <i className="fa-solid fa-heart fa-3x mb-3"></i>
                            <h4>Customer Satisfaction</h4>
                            <p>We focus on customer service, making sure each customer leaves satisfied with their meal.</p>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <i className="fa-solid fa-truck fa-3x mb-3"></i>
                            <h4>Fast Delivery</h4>
                            <p>Get your food delivered hot and fresh, right to your doorstep in no time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='meet-our-team py-5'>
        <div className="container">
          <h2 className='text-center mb-5'>Meet Our Team</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="team-member text-center">
                <img
                  src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/02-2.jpg"
                  alt="Team Member 1"
                  className="img-fluid rounded-circle mb-3"
                />
                <h4>John Doe</h4>
                <p className='text-danger'>Head Chef</p>
                <p>John leads our culinary team with a passion for creating amazing dishes and flavors.</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="team-member text-center">
                <img
                  src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/03-2.jpg"
                  alt="Team Member 2"
                  className="img-fluid rounded-circle mb-3"
                />
                <h4>Jane Smith</h4>
                <p className='text-danger'>Restaurant Manager</p>
                <p>Jane ensures everything runs smoothly in the restaurant and takes care of our guests.</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="team-member text-center">
                <img
                  src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/04-2.jpg"
                  alt="Team Member 3"
                  className="img-fluid rounded-circle mb-3"
                />
                <h4>Emma Johnson</h4>
                <p className='text-danger'>Pastry Chef</p>
                <p >Emma is known for her delightful pastries and desserts that everyone loves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default About;
