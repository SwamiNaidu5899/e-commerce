import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CartContext } from './CartContext'; 

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};


const products = [
  { id: 1, name: 'Product 1', image: 'https://cmsimages.shoppersstop.com/Puma_web_1b1c883931/Puma_web_1b1c883931.png', price: '$10' },
  { id: 2, name: 'Product 2', image: 'https://cmsimages.shoppersstop.com/spykar_web_e2b18aaea5/spykar_web_e2b18aaea5.png', price: '$15' },
  { id: 3, name: 'Product 3', image: 'https://cmsimages.shoppersstop.com/VH_web_9715c8a2e4/VH_web_9715c8a2e4.png', price: '$20' },
  { id: 4, name: 'Product 4', image: 'https://cmsimages.shoppersstop.com/flying_machine_web_3a25f45e79/flying_machine_web_3a25f45e79.png', price: '$25' },
  { id: 5, name: 'Product 5', image: 'https://cmsimages.shoppersstop.com/pepe_web_9961d5c4d5/pepe_web_9961d5c4d5.png', price: '$30' },
  { id: 6, name: 'Product 6', image: 'https://cmsimages.shoppersstop.com/Crimsoune_Club_web_9c0568d921/Crimsoune_Club_web_9c0568d921.png', price: '$35' },
];
function ProductCarousel() {
  const { addToCart, addToWishlist } = useContext(CartContext); 

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Best Selling Products</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        transitionDuration={500}
      >
        {products.map((product) => (
          <div className="product-carousel-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-carousel-img" />
            <div className="product-carousel-body">
              <h5 className="product-carousel-title">{product.name}</h5>
              <p className="product-carousel-price">{product.price}</p>
              <button className="product-carousel-btn-primary" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
              <button className="product-carousel-btn-secondary" onClick={() => addToWishlist(product)}>
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductCarousel;




