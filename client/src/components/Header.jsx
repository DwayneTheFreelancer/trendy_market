import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
              <Nav.Link eventKey={2} href="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;































