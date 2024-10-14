import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import '../styles.css'; // Custom styling

const Offers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className='offers-main' style={{ maxWidth: '100%', marginTop: '20px' }}>
      <Slider {...settings}>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/SS_Axis_Bank_Header_Strip_WEB_1840_x_250_px_a479fa8c12/SS_Axis_Bank_Header_Strip_WEB_1840_x_250_px_a479fa8c12.jpg"
            alt="Image 1"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/hdfc_strip_web_de68992eef/hdfc_strip_web_de68992eef.jpg"
            alt="Image 2"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/new10_sale_strip_web_a9f20f5168/new10_sale_strip_web_a9f20f5168.jpg"
            alt="Image 3"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/icici_strip_web_256c300ca1/icici_strip_web_256c300ca1.jpg"
            alt="Image 4"
            className="carousel-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Offers;
