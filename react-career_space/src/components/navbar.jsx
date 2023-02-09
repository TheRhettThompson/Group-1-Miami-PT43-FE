import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "../App.css"
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="logo">
          CareerSpace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className = 'links'>
              <div className = 'links-middle'>
                <Nav.Link href="aboutus">About Us</Nav.Link>
                <Nav.Link href="contactus">Contact Us</Nav.Link>
              </div>
              <div className = 'links-right'>
                <Nav.Link href="signup">Sign Up</Nav.Link>
                <Nav.Link href="login">Log In</Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
