import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles.css'

function Banner() {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={3000}
      transitionTime={500}
      stopOnHover={true}
      emulateTouch={true}
      dynamicHeight={true}
    >
      <div>
        <img src="https://cmsimages.shoppersstop.com/Levis_web_06cf940456/Levis_web_06cf940456.png" alt="Slide 1" />
      </div>
      <div>
        <img src="https://cmsimages.shoppersstop.com/ck_web_f65e1b50f9/ck_web_f65e1b50f9.png" alt="Slide 2" />
      </div>
      <div>
        <img src="https://cmsimages.shoppersstop.com/Allen_solly_web_9690f52612/Allen_solly_web_9690f52612.png" alt="Slide 3" />
      </div>
      <div>
        <img src="https://cmsimages.shoppersstop.com/uspa_web_4caab3c9ad/uspa_web_4caab3c9ad.png" alt="Slide 4" />
      </div>
    </Carousel>
  );
}

export default Banner;
