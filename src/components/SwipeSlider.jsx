import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nagets from '../assets/pic/home_folder/nagets.png'
import Fifty from '../assets/pic/home_folder/fifty.png'
import ChilliShape1 from '../assets/pic/home_folder/chilli-shape.png'
import ChilliShape2 from '../assets/pic/home_folder/chilli-shape-2.png'
import ChilliShape3 from '../assets/pic/home_folder/chilli-shape-3.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const SwipeSlider = () => {
    const { t } = useTranslation();

    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item className='slide'>
                <img className='fifty' src={Fifty} alt="" />
                <img src={ChilliShape1} alt="" className='chilli-shape-1' />
                <img src={ChilliShape2} alt="" className='chilli-shape-2' />
                <img src={ChilliShape3} alt="" className='chilli-shape-3' />


                <div className="main-part d-flex justify-content-end ">
                    <div className="text d-flex flex-column">
                        <p>{t("home.coursel.text1")}</p>
                        <h1>{t("home.coursel.text3")} <br /> {t("home.coursel.text4")}  <br /> {t("home.coursel.text5")}</h1>
                        <Link to='/shop' className='home-btn'>{t("home.coursel.text8")}</Link>

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
                        <p>{t("home.coursel.text1")}</p>
                        <h1>{t("home.coursel.text6")} <br /> {t("home.coursel.text4")}  <br /> {t("home.coursel.text5")}</h1>
                        <Link to='/shop' className='home-btn'>{t("home.coursel.text8")}</Link>
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
                        <p>{t("home.coursel.text1")}</p>
                        <h1>{t("home.coursel.text7")} <br /> {t("home.coursel.text4")}  <br /> {t("home.coursel.text5")}</h1>
                        <Link to='/shop' className='home-btn'>{t("home.coursel.text8")}</Link>
                        </div>
                    <img className='main-pic' src={Nagets} alt="" />
                </div>

            </Carousel.Item>
        </Carousel>
    );
};

export default SwipeSlider;
