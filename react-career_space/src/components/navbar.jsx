import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "../App.css";
// import { Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand style={{ color: "#ad974f" }} href="/" className="logo">
          <i>CareerSpace</i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="links">
              <div className="links-middle">
                <Nav.Link style={{ color: "#231f20" }} href="aboutus">
                  About Us
                </Nav.Link>
                <Nav.Link style={{ color: "#231f20" }} href="contactus">
                  Contact Us
                </Nav.Link>
              </div>
              <div className="links-right">
                <Nav.Link style={{ color: "#231f20" }} href="signup">
                  Sign Up
                </Nav.Link>
                <Nav.Link style={{ color: "#231f20" }} href="login">
                  Log In
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
