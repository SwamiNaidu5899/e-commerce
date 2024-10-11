import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import '../styles.css';

function Header({ cartItems, wishlistItems }) {
  return (
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
            <Nav.Link>
              <FaHeart size={20} />
              <Badge bg="danger" className="ms-1">{wishlistItems.length}</Badge>
            </Nav.Link>
            <Nav.Link>
              <FaShoppingCart size={20} />
              <Badge bg="danger" className="ms-1">{cartItems.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
