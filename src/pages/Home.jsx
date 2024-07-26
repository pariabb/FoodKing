import React from 'react'
import SwipeSlider from '../components/SwipeSlider'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SingleProduct from '../components/SingleProduct'

import MainFood from '../assets/pic/home_folder/main-food.png'
import Fiftyper from '../assets/pic/home_folder/50percent-off.png'
import Burger from '../assets/pic/home_folder/burger-text.png'
import Pizza from '../assets/pic/home_folder/pizza-2.png'
import Pizzatext1 from '../assets/pic/home_folder/pizza-text.png'
import Pizzatext2 from '../assets/pic/home_folder/pizza-text-2.png'
import Grill from '../assets/pic/home_folder/grilled.png'
import Patato from '../assets/pic/home_folder/patato-shape.png'
import Tomato from '../assets/pic/home_folder/tomato-shape-2.png'
import Spicy from '../assets/pic/home_folder/spicy.png'

import SwipeSlider2 from '../components/SwipeSlider2';

const Home = () => {
  const data = useSelector(p => p)
  const slicedData = data.slice(0, 9)

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const cards = [
    { id: 1, title: 'Pro Pizza', description: '3 products', imageUrl: 'https://modinatheme.com/foodking/wp-content/uploads/2024/03/pizza-2.png' },
    { id: 2, title: 'Chicken', description: '8 products', imageUrl: 'https://modinatheme.com/foodking/wp-content/uploads/2024/03/pasta.png' },
    { id: 3, title: 'Pro Burger', description: '3 products', imageUrl: 'https://modinatheme.com/foodking/wp-content/uploads/2024/03/burger-2.png' },
    { id: 4, title: 'Pro Pasta', description: '3 products', imageUrl: 'https://modinatheme.com/foodking/wp-content/uploads/2024/03/french-fry.png' },
  ];

  return (
    <div>
      <section className="hero">
        <SwipeSlider />
      </section>

      <section className="popular-items">
        <div className="carousel-container">
          <p>Cripsy,Very Bite Taste</p>
          <h1>Popular Food Items</h1>
          <Slider  {...settings}>
            {cards.map((card) => (
              <Link to='/shop' key={card.id}>
                <div className="carousel-card">
                  <div className="card-img">
                    <img src={card.imageUrl} alt={card.title} />
                  </div>
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
          <Slider className='d-none' {...settings1}>
            {cards.map((card) => (
              <Link to='/shop' key={card.id}>
                <div className="carousel-card">
                  <div className="card-img">
                    <img src={card.imageUrl} alt={card.title} />
                  </div>
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>

        <div className="container d-flex my-5">
          <div className="left">
            <div className="text">
              <img className='burger' src={Burger} alt="" />
              <img className='main-food' src={MainFood} alt="" />
              <p>Cripsy,Every Bite Taste</p>
              <h1>SUPER <br /> DELICIOUS</h1>
              <img className='fiftyper' src={Fiftyper} alt="" />
            </div>
          </div>
          <div className="right">
            <img className='pizza' src={Pizza} alt="" />
            <img className='pizza-text1' src={Pizzatext1} alt="" />
            <img className='pizza-text2' src={Pizzatext2} alt="" />
          </div>
        </div>

        <div className="swiper container mt-5 ">
          <h5>GLOBAL <span> 5K+ </span>HAPPY SPONSORS WITH US</h5>
          <SwipeSlider2 />
        </div>
      </section>

      <section className='dark-section'>
        <div className="d-flex justify-content-center align-items-center ms-5">
          <div className="text">
            <h4>Save 20%</h4>
            <h1>Today's <span>Astackin </span>Day</h1>
            <h3>Grilled <span> Chicken $59.00</span></h3>
            <Link to='/shop' className='home-btn'>Order Now</Link>
          </div>
          <img className='w-50 mt-5' src={Grill} alt="" />
          <img className='position-absolute spicy' src={Spicy} alt="" />
          <img className='position-absolute pizza-text2' src={Pizzatext2} alt="" />
          <img className='position-absolute patato' src={Patato} alt="" />
          <img className='position-absolute tomato' src={Tomato} alt="" />
        </div>
      </section>

      <section className='fastfoods'>
        <p className='text-center mt-5'>Cripsy,Very Bite Taste</p>
        <h1 className='text-center'>Popular Fast Foods</h1>
        <div className="container mt-5 my-4">
          <div className="row d-flex justify-content-center">
            {slicedData.map(item => (
              <div key={item.id} className="col-12 col-lg-4">
                <SingleProduct alldata={item} />
              </div>
            ))}
            <Link to='/shop' className='home-btn'>View More</Link>
          </div>
        </div>
      </section>

      <section className='delivery mt-2'>
        <div className="d-flex  ms-5">
          <div className="text">
            <h4>This is chance</h4>
            <h1><span>30 MINUTES <br /> DELIVERY! </span></h1>
            <p>
              If you’re having a meeting, working late at night and  <br />need an extra push. Let us know and we will be there</p>
            <Link to='/shop' className='home-btn'>Order Now</Link>
          </div>

          <div className="deliveryman">
            <img src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h5_img10.png" alt="" />
          </div>
        </div>

      </section>
    </div>
  );
};

export default Home;
