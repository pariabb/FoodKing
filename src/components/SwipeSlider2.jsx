import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SwipeSlider2 = () => {


    const set={
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
      
    const set1={
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    }
    
      const logos = [
        { id: 1, imageUrl: 'https://modinatheme.com/foodking/wp-content/uploads/2024/02/01.svg' },
        { id: 2 , imageUrl: 'https://modinatheme.com/foodking/wp-content/uploads/2024/02/02.svg' },
        { id: 3 , imageUrl: 'https://modinatheme.com/foodking/wp-content/uploads/2024/02/03.svg' },
        { id: 4, imageUrl: 'https://modinatheme.com/foodking/wp-content/uploads/2024/02/04.svg' },
        { id: 5, imageUrl: 'https://modinatheme.com/foodking/wp-content/uploads/2024/02/05.svg' },
        { id: 6, imageUrl: 'https://modinatheme.com/foodking/wp-content/uploads/2024/02/06.svg' },
    
    
      ];
  return (

  <>
    <Slider 
     {...set}>
    {logos.map((logo) => (
        <div key={logo.id} className="carousel-card mt-5 mb-5">
          <div className="logo-img d-flex justify-content-center align-items-center mb-5 ">
            <img src={logo.imageUrl}  />
          </div>
     
        </div>
    ))}
  </Slider>
    <Slider className='d-none' 
     {...set1}>
    {logos.map((logo) => (
        <div key={logo.id} className="carousel-card mt-5 mb-5">
          <div className="logo-img d-flex justify-content-center align-items-center mb-5 ">
            <img src={logo.imageUrl}  />
          </div>
     
        </div>
    ))}
  </Slider>
  </>
  )
}

export default SwipeSlider2



