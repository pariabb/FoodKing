import React from 'react'
import { Link } from 'react-router-dom'
import FooterImage1 from '../assets/pic/footer/footer-1.png'
import FooterImage2 from '../assets/pic/footer/footer-2.png'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className='main-footer'>
        <img className='footer-image-one' src={FooterImage1}></img>
        <img className='footer-image-two' src={FooterImage2}></img>


        <div className="container">
          <div className="row footer-wrapper">
            <div className="col-lg-3 col-md-3 col-sm-3 first">
              <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/05/foodking-logo.svg" alt="" />
              <p >{t('footer.text1')}</p>
              <div className="example d-flex flex-column">
                <span className='mb-3'>{t('footer.text2')}</span>
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
            <div className='col-lg-2 col-md-2 col-sm-2 first'>
              <h5>{t('footer.text3')}</h5>
              <ul className='links'>
                <li><Link to='/about'>{t('footer.text4')}</Link></li>
                <li><Link to='/about'>{t('footer.text5')}</Link></li>
                <li><Link to='/blog'>{t('footer.text6')}</Link></li>
                <li><Link to='/blog'>{t('footer.text7')}</Link></li>
              </ul>
            </div>

            <div className='col-lg-2 col-md-2 col-sm-2 first'>
              <h5>{t('footer.text8')}</h5>
              <ul className='links'>
                <li><Link to='/cart'>{t('footer.text9')}</Link></li>
                <li><Link to='/wishlist'>{t('footer.text10')}</Link></li>
                <li><Link to='/cart'>{t('footer.text11')}</Link></li>
                <li><Link to='/cart'>{t('footer.text12')}</Link></li>
              </ul>
            </div>

            <div className='col-lg-2 col-md-2 col-sm-2 first'>
              <h6 className='address'>{t('footer.text13')}</h6>

              <p>570 8th Ave, New York,NY <br /> <span className='unic'>10018</span> United States</p>

              <h6>{t('footer.text14')}</h6>
              <p>9.30am - 6.30pm <br />
              {t('footer.text15')}</p>
            </div>

            <div className='install col-lg-3 col-md-3 col-sm-3 first'>
              <h6 className='address '>{t('footer.text16')}</h6>
              <span>{t('footer.text17')}</span>

              <div className="store d-flex ">
                <a href="https://www.apple.com/app-store/"> <img className='app-store' src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/app-store.png" /></a>
                <a href="https://play.google.com/store/games?device=windows"> <img className='google-play' src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/google-play.png" /></a>
              </div>

              <span>{t('footer.text18')}</span>
              <h3>+1718-904-4450</h3>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
            <p>
              © Copyright <span>2024</span> Foodking. {t('footer.text19')}
            </p>
            <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/card-1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer