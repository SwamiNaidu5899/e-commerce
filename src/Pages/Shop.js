import React from 'react';
import '../styles.css';

const products = [
  { id: 1, name: 'Product 1', image: 'https://cmsimages.shoppersstop.com/Life_web_394338632e/Life_web_394338632e.png', price: '$10' },
  { id: 2, name: 'Product 2', image: 'https://cmsimages.shoppersstop.com/ALTLIFE_web_d2e224d4e1/ALTLIFE_web_d2e224d4e1.png', price: '$15' },
  { id: 3, name: 'Product 3', image: 'https://cmsimages.shoppersstop.com/karrot_web_40e7843793/karrot_web_40e7843793.png', price: '$20' },
  { id: 4, name: 'Product 4', image: 'https://cmsimages.shoppersstop.com/bandeya_web_395d134431/bandeya_web_395d134431.png', price: '$25' },
  { id: 5, name: 'Product 5', image: 'https://cmsimages.shoppersstop.com/Calvin_Klein_2f1c6b6f9f/Calvin_Klein_2f1c6b6f9f.png', price: '$30' },
  { id: 6, name: 'Product 6', image: 'https://cmsimages.shoppersstop.com/Allen_Solly_753c5c23a6/Allen_Solly_753c5c23a6.png', price: '$35' },
  { id: 7, name: 'Product 7', image: 'https://sslimages.shoppersstop.com/sys-master/images/h43/heb/31010273001502/AW23LFSHTBR04_GREY.jpg_2000Wx3000H', price: '$40' },
  { id: 7, name: 'Product 7', image: 'https://cmsimages.shoppersstop.com/ss_selects_Web_Altlife_31238fa12e/ss_selects_Web_Altlife_31238fa12e.png', price: '$40' },
  { id: 7, name: 'Product 7', image: 'https://cmsimages.shoppersstop.com/jacket_d9a7a3e256/jacket_d9a7a3e256.png', price: '$40' },
  { id: 7, name: 'Product 7', image: 'https://cmsimages.shoppersstop.com/flying_machine_web_3a25f45e79/flying_machine_web_3a25f45e79.png', price: '$40' },
  { id: 7, name: 'Product 7', image: 'https://cmsimages.shoppersstop.com/kurta_eac0a1f3fe/kurta_eac0a1f3fe.png', price: '$40' },
  { id: 7, name: 'Product 7', image: 'https://cmsimages.shoppersstop.com/suits_c599ccb4bd/suits_c599ccb4bd.png', price: '$40' },
  { id: 7, name: 'Product 7', image: 'https://cmsimages.shoppersstop.com/Tshirt_75ab9b3a92/Tshirt_75ab9b3a92.png', price: '$40' },
  { id: 7, name: 'Product 7', image: 'https://sslimages.shoppersstop.com/sys-master/images/h34/hb7/33254359433246/COREFLAXNAU74_NATURAL.jpg_2000Wx3000H', price: '$40' },
  { id: 7, name: 'Product 7', image: 'https://cmsimages.shoppersstop.com/shirt_f127068091/shirt_f127068091.png', price: '$40' },
  { id: 7, name: 'Product 7', image: 'https://sslimages.shoppersstop.com/sys-master/images/h36/h5d/30980188143646/AW23LFVNTCFIN26_INDIGO.jpg_2000Wx3000H', price: '$40' },
 
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
