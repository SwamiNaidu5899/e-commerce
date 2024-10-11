import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300x200', price: '$10' },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300x200', price: '$15' },
  { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300x200', price: '$20' },
  { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300x200', price: '$25' },
  { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/300x200', price: '$30' },
  { id: 6, name: 'Product 6', image: 'https://via.placeholder.com/300x200', price: '$35' },
];

function ProductCarousel({ addToCart, addToWishlist }) {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      transitionDuration={500}
    >
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-outline-secondary ms-2"
              onClick={() => addToWishlist(product)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
