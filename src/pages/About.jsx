import React from 'react';
import { Link } from 'react-router-dom';
import Burger from '../assets/pic/about/burger-1.png'
import Burger_text from '../assets/pic/home_folder/burger-text.png'
import { useTranslation } from 'react-i18next';




const About = () => {
  const { t } = useTranslation();

    return (
        <div className='about-main'>
            <section className='page-img '>
                <div className="container">
                    <div className="page-heading center">
                        <h1 className='mb-3' >{t("header.menu2")}</h1>
                        <p><Link to='/' className='home-link'>{t("header.menu1")}  <i className="fa-solid fa-greater-than"></i>  </Link> <span>{t("header.menu2")}</span> </p>
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
                            <h2 className='mb-4 text-danger'>{t("about.text1")}</h2>
                            <p>
                            {t("about.text2")}                            </p>
                            <p>
                            {t("about.text3")}                            </p>
                            <Link to='/shop' className='home-btn '>
                            {t("about.text4")}                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='why-choose-us py-5 '>
                <div className="container text-center">
                    <h2 className='mb-5'>{t("about.text5")}</h2>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <i className="fa-solid fa-utensils fa-3x mb-3"></i>
                            <h4>{t("about.text6")}</h4>
                            <p>{t("about.text7")}</p>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <i className="fa-solid fa-heart fa-3x mb-3"></i>
                            <h4>{t("about.text8")}</h4>
                            <p>{t("about.text9")}</p>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <i className="fa-solid fa-truck fa-3x mb-3"></i>
                            <h4>{t("about.text10")}</h4>
                            <p>{t("about.text11")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='meet-our-team py-5'>
        <div className="container">
          <h2 className='text-center mb-5'>{t("about.text12")}</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="team-member text-center">
                <img
                  src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/02-2.jpg"
                  alt="Team Member 1"
                  className="img-fluid rounded-circle mb-3"
                />
                <h4>John Doe</h4>
                <p className='text-danger'>{t("about.text13")}</p>
                <p>{t("about.text14")}</p>
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
                <p className='text-danger'>{t("about.text15")}</p>
                <p>{t("about.text16")}</p>
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
                <p className='text-danger'>{t("about.text17")}</p>
                <p >{t("about.text18")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default About;
