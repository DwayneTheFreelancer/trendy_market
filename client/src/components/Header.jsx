import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = (props) => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Trendy Market</Navbar.Brand>
        <Nav.Link href="/products">Products</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {props.currentUser ? (
            <>
              <p>{props.currentUser.username}</p>

              {/* <button onClick={props.handleLogout}>logout</button> */}
              <Button variant="primary" onClick={props.handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            // <button onClick={props.handleLoginButton}>Login/register</button>
            <Button variant="primary" onClick={props.handleLoginButton}>
              Login/Register
            </Button>
            // <Button variant="primary" onClick={props.handleLoginButton}>
            //   Register
            // </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;































