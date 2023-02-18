import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import "../styles/navbar.css";
import { useContext } from "react";  
import Logo from "../assets/SouthFLDevJobs_logo.jpg"

{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link> */}

function NavbarComponent() {
  
  return ( 
    // DELETED navbarcomponent FROM LINE 18 
    <Navbar  expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"> <img src = { Logo } className="w-50" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="aboutus">About Us</Nav.Link>
            <Nav.Link href="contactus">Contact Us</Nav.Link>
            <Nav.Link href="jobs">Jobs</Nav.Link>
            {/* <NavDropdown title="Dropdown changing soon" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="signup">Sign Up</Nav.Link>
            <Nav.Link className="login" eventKey={2} href="login">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

// FIRST NAVBAR

  // return (
  //   <Navbar bg="light" expand="lg" className="navbar">
  //     <Container>
  //       <Navbar.Brand style={{ color: "#ad974f" }} href="/" className="logo">
  //         <i>SouthFl Dev Jobs</i>
  //       </Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="me-auto">
  //           <div className="links">
  //             <div className="links-middle">
  //               <Nav.Link style={{ color: "#231f20" }} href="aboutus">
  //                 About Us
  //               </Nav.Link>
  //               <Nav.Link style={{ color: "#231f20" }} href="contactus">
  //                 Contact Us
  //               </Nav.Link>
  //             </div>
  //             <div className="links-right">
  //               <Nav.Link style={{ color: "#231f20" }} href="signup">
  //                 Sign Up
  //               </Nav.Link>
  //               <Nav.Link style={{ color: "#231f20" }} href="login">
  //                <button className="btn btn-primary">Log In</button>
  //               </Nav.Link>
  //             </div>
  //           </div>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );
}

export default NavbarComponent;

