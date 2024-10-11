import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const Offers = () => {
  return (
    <div style={{ maxWidth: '100%', height: '200px', marginTop : '20px' }}>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        dynamicHeight={false}
        showStatus={false}
        showIndicators={true}
        showArrows={false}
      >
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/SS_Axis_Bank_Header_Strip_WEB_1840_x_250_px_a479fa8c12/SS_Axis_Bank_Header_Strip_WEB_1840_x_250_px_a479fa8c12.jpg"
            alt="Image 1"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/hdfc_strip_web_de68992eef/hdfc_strip_web_de68992eef.jpg"
            alt="Image 2"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/new10_sale_strip_web_a9f20f5168/new10_sale_strip_web_a9f20f5168.jpg"
            alt="Image 3"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/icici_strip_web_256c300ca1/icici_strip_web_256c300ca1.jpg"
            alt="Image 4"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Offers;



