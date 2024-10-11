import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { FaShoppingCart, FaHeart, FaTrashAlt } from 'react-icons/fa';
import '../styles.css';

function CartWishlistPanel({
  cartItems,
  wishlistItems,
  removeFromCart,
  removeFromWishlist,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [cartPaneOpen, setCartPaneOpen] = useState(false);
  const [wishlistPaneOpen, setWishlistPaneOpen] = useState(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setCartPaneOpen(true)}>
        <FaShoppingCart />
      </button>
      <button className="btn btn-outline-secondary ms-2" onClick={() => setWishlistPaneOpen(true)}>
        <FaHeart />
      </button>

      {/* Cart Sliding Panel */}
      <SlidingPane
        isOpen={cartPaneOpen}
        title="Your Cart"
        from="right"
        onRequestClose={() => setCartPaneOpen(false)}
      >
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h5>{item.name}</h5>
              <p>{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                <FaTrashAlt /> Remove
              </button>
            </div>
          ))
        )}
      </SlidingPane>

      {/* Wishlist Sliding Panel */}
      <SlidingPane
        isOpen={wishlistPaneOpen}
        title="Your Wishlist"
        from="right"
        onRequestClose={() => setWishlistPaneOpen(false)}
      >
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <h5>{item.name}</h5>
              <p>{item.price}</p>
              <button className="btn btn-danger" onClick={() => removeFromWishlist(item.id)}>
                <FaTrashAlt /> Remove
              </button>
            </div>
          ))
        )}
      </SlidingPane>
    </div>
  );
}

export default CartWishlistPanel;
 