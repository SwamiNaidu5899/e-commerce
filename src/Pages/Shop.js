import React, { useContext } from 'react';
import '../styles.css';
import { CartContext } from '../Components/CartContext';

const products = [
  { id: 1, name: 'Product 1', image: 'https://cmsimages.shoppersstop.com/Life_web_394338632e/Life_web_394338632e.png', price: '$10' },
  { id: 2, name: 'Product 2', image: 'https://cmsimages.shoppersstop.com/ALTLIFE_web_d2e224d4e1/ALTLIFE_web_d2e224d4e1.png', price: '$15' },
  { id: 3, name: 'Product 3', image: 'https://cmsimages.shoppersstop.com/karrot_web_40e7843793/karrot_web_40e7843793.png', price: '$20' },
  { id: 4, name: 'Product 4', image: 'https://cmsimages.shoppersstop.com/bandeya_web_395d134431/bandeya_web_395d134431.png', price: '$25' },
  { id: 5, name: 'Product 5', image: 'https://cmsimages.shoppersstop.com/Calvin_Klein_2f1c6b6f9f/Calvin_Klein_2f1c6b6f9f.png', price: '$30' },
  { id: 6, name: 'Product 6', image: 'https://cmsimages.shoppersstop.com/Allen_Solly_753c5c23a6/Allen_Solly_753c5c23a6.png', price: '$35' },
  { id: 7, name: 'Product 7', image: 'https://sslimages.shoppersstop.com/sys-master/images/h43/heb/31010273001502/AW23LFSHTBR04_GREY.jpg_2000Wx3000H', price: '$40' },
];

function Shop() {
  const { addToCart, addToWishlist } = useContext(CartContext);

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
