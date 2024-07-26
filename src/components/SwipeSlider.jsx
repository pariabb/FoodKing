import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nagets from '../assets/pic/home_folder/nagets.png'
import Fifty from '../assets/pic/home_folder/fifty.png'
import ChilliShape1 from '../assets/pic/home_folder/chilli-shape.png'
import ChilliShape2 from '../assets/pic/home_folder/chilli-shape-2.png'
import ChilliShape3 from '../assets/pic/home_folder/chilli-shape-3.png'
import { Link } from 'react-router-dom';



const SwipeSlider = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item className='slide'>
                <img className='fifty' src={Fifty} alt="" />
                <img src={ChilliShape1} alt="" className='chilli-shape-1' />
                <img src={ChilliShape2} alt="" className='chilli-shape-2' />
                <img src={ChilliShape3} alt="" className='chilli-shape-3' />


                <div className="main-part d-flex justify-content-end ">
                    <div className="text d-flex flex-column">
                        <p>Cripsy,Every Bite Taste</p>
                        <h1>DELICIOUS <br /> FRIED  <br /> CHICKEN</h1>
                        <Link to='/shop' className='home-btn'>Order Now</Link>

                         </div>
                    <img className='main-pic' src={Nagets} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item className='slide'>
            <img className='fifty' src={Fifty} alt="" />
                <img src={ChilliShape1} alt="" className='chilli-shape-1' />
                <img src={ChilliShape2} alt="" className='chilli-shape-2' />
                <img src={ChilliShape3} alt="" className='chilli-shape-3' />
                <div className="main-part d-flex justify-content-end ">
                    <div className="text d-flex flex-column">
                        <p>Cripsy,Every Bite Taste</p>
                        <h1>AWESOME <br /> FRIED  <br /> CHICKEN</h1>
                        <Link to='/shop' className='home-btn'>Order Now</Link>
                        </div>
                    <img className='main-pic' src={Nagets} alt="" />
                </div>

            </Carousel.Item>
            <Carousel.Item className='slide'>

            <img className='fifty' src={Fifty} alt="" />
                <img src={ChilliShape1} alt="" className='chilli-shape-1' />
                <img src={ChilliShape2} alt="" className='chilli-shape-2' />
                <img src={ChilliShape3} alt="" className='chilli-shape-3' />

                <div className="main-part d-flex justify-content-end ">
                    <div className="text d-flex flex-column">
                        <p>Cripsy,Every Bite Taste</p>
                        <h1>FAVORITE <br /> FRIED  <br /> CHICKEN</h1> 
                        <Link to='/shop' className='home-btn'>Order Now</Link>
                        </div>
                    <img className='main-pic' src={Nagets} alt="" />
                </div>

            </Carousel.Item>
        </Carousel>
    );
};

export default SwipeSlider;
