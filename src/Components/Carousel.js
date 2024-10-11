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
        <img src="https://via.placeholder.com/1200x400/FF5733/FFFFFF?text=Slide+1" alt="Slide 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/1200x400/33C3FF/FFFFFF?text=Slide+2" alt="Slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/1200x400/FFC300/FFFFFF?text=Slide+3" alt="Slide 3" />
      </div>
      <div>
        <img src="https://via.placeholder.com/1200x400/DAF7A6/000000?text=Slide+4" alt="Slide 4" />
      </div>
    </Carousel>
  );
}

export default Banner;
