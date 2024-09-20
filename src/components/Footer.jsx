import React from 'react'
import { Link } from 'react-router-dom'
import FooterImage1 from '../assets/pic/footer/footer-1.png'
import FooterImage2 from '../assets/pic/footer/footer-2.png'

const Footer = () => {
  
  return (
    <>
      <footer className='main-footer'>
      <img className='footer-image-one' src={FooterImage1}></img>
      <img className='footer-image-two' src={FooterImage2}></img>


          <div className="container">
            <div className="row footer-wrapper">
              <div className="col-lg-3 col-md-3 col-sm-3 ">
                <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/05/foodking-logo.svg" alt="" />
                <p >We believe it has the power to do <br />
                amazing things.</p>
                <div className="example d-flex flex-column">
                <span className='mb-3'>Interested in working with us?</span>
                <a className='examplea mt-3'>info@example.com</a>
                </div>
             
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
              <div className='col-lg-2 col-md-2 col-sm-2'>
                     <h5>Quick Links</h5>
                     <ul className='links'>
                      <li><Link to='/about'>Services</Link></li>
                      <li><Link to='/about'>About Company</Link></li>
                      <li><Link to='/about'>Latest News</Link></li>
                      <li><Link to='/about'>Testimonials</Link></li>
                     </ul>
              </div>

              <div className='col-lg-2 col-md-2 col-sm-2'>
                     <h5>My Account</h5>
                     <ul className='links'>
                      <li><Link to='/about'>My Profile</Link></li>
                      <li><Link to='/about'>My Order History</Link></li>
                      <li><Link to='/about'>My Wishlist</Link></li>
                      <li><Link to='/about'>Order Tracking</Link></li>
                      <li><Link to='/about'>Shoping Cart</Link></li>
                     </ul>
              </div>
              
              <div className='col-lg-2 col-md-2 col-sm-2'>
                  <h6 className='address'>Address:</h6>

                   <p>570 8th Ave, New York,NY <br /> <span className='unic'>10018</span> United States</p>

                   <h6>Hours:</h6>
                   <p>9.30am - 6.30pm <br />
                   Monday To Friday</p>
              </div>
              
              <div className='install col-lg-3 col-md-3 col-sm-3'>
                <h6 className='address '>Install App</h6>
                <span>From App Store Or Google Play</span>

                <div className="store d-flex ">
               <a href="https://www.apple.com/app-store/"> <img className='app-store' src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/app-store.png" /></a>
               <a href="https://play.google.com/store/games?device=windows"> <img className='google-play' src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/google-play.png"  /></a>
                </div>
                
                <span>24/7 SUPPORT CENTER</span>
                <h3>+1718-904-4450</h3>
                </div>
            </div>
          </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
          <p>
          © Copyright <span>2024</span> Foodking. All Rights Reserved.   
          </p>
          <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/card-1.png" alt="" />
          </div>
          </div>
      </div>
    </>
  )
}

export default Footer