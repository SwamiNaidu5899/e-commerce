import React from 'react';
import '../styles.css';

const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300x200', price: '$10' },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300x200', price: '$15' },
  { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300x200', price: '$20' },
  { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300x200', price: '$25' },
  { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/300x200', price: '$30' },
  { id: 6, name: 'Product 6', image: 'https://via.placeholder.com/300x200', price: '$35' },
  { id: 7, name: 'Product 7', image: 'https://via.placeholder.com/300x200', price: '$40' },
  { id: 8, name: 'Product 8', image: 'https://via.placeholder.com/300x200', price: '$45' },
  { id: 9, name: 'Product 9', image: 'https://via.placeholder.com/300x200', price: '$50' },
  { id: 10, name: 'Product 10', image: 'https://via.placeholder.com/300x200', price: '$55' },
  { id: 11, name: 'Product 11', image: 'https://via.placeholder.com/300x200', price: '$60' },
  { id: 12, name: 'Product 12', image: 'https://via.placeholder.com/300x200', price: '$65' },
  { id: 13, name: 'Product 13', image: 'https://via.placeholder.com/300x200', price: '$70' },
  { id: 14, name: 'Product 14', image: 'https://via.placeholder.com/300x200', price: '$75' },
  { id: 15, name: 'Product 15', image: 'https://via.placeholder.com/300x200', price: '$80' },
  { id: 16, name: 'Product 16', image: 'https://via.placeholder.com/300x200', price: '$85' },
];

function Shop({ addToCart, addToWishlist }) {
  return (
    <div className="shop-container">
      <h2>Shop</h2>
      <div className="products-grid">
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
      </div>
    </div>
  );
}

export default Shop;
