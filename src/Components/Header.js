import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaTrashAlt, FaSignInAlt } from 'react-icons/fa';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import '../styles.css';
import { CartContext } from './CartContext'; 

function Header() {
  const {
    cartItems = [],
    wishlistItems = [],
    removeFromCart,
    removeFromWishlist,
    increaseQuantity,
    decreaseQuantity,
    addToCart
    } = useContext(CartContext);

  const [cartPaneOpen, setCartPaneOpen] = useState(false);
  const [wishlistPaneOpen, setWishlistPaneOpen] = useState(false);

  return (
    <div>
     {/* <div style={{position:'fixed', zIndex:'50', width:'100%'}}> */}
      <Navbar bg="light" expand="lg" className="shadow-sm p-3 mb-5 bg-white rounded">
        <Container>
          <Navbar.Brand href="/">YourBrand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link onClick={() => setWishlistPaneOpen(true)}>
                <FaHeart size={20} />
                <Badge bg="danger" className="ms-1">
                  {wishlistItems.length}
                </Badge>
              </Nav.Link>

              <Nav.Link onClick={() => setCartPaneOpen(true)}>
                <FaShoppingCart size={20} />
                <Badge bg="danger" className="ms-1">
                  {cartItems.length}
                </Badge>
              </Nav.Link>

              <Nav.Link href="/signin">
              <FaSignInAlt size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
              <img src={item.image} alt={item.name} height={80}/>
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
              <img src={item.image} alt={item.name} height={80}/>
              <button className="btn btn-danger" onClick={() => removeFromWishlist(item.id)}>
                <FaTrashAlt /> Remove
              </button>
              <button className="btn btn-success" onClick={() => addToCart(item.id)}>
                <FaShoppingCart /> AddToCart
              </button>
            </div>
          ))
        )}
      </SlidingPane>
    </div>
  );
}

export default Header;
