import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../assets/ logo.svg";
import "../index.css"; // Ensure the CSS file is imported

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        {/* Mobile Logo */}
        <Navbar.Brand href="#home" className="d-lg-none">
          <img
            src={logo}
            alt="Logo"
            width="80"
            height="auto"
            className="d-inline-block align-middle"
          />
        </Navbar.Brand>

        {/* Desktop Back Button */}
        <Navbar.Brand
          href="#home"
          className="d-none d-lg-flex align-items-center"
        >
          <FaArrowLeft className="me-2" />
          Back to iTech
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center justify-content-center">
            <Navbar.Brand className="d-none d-lg-flex align-items-center mx-auto">
              <img
                src={logo}
                alt="Logo"
                width="150"
                height="auto"
                className="d-inline-block align-middle"
              />
            </Navbar.Brand>
          </Nav>

          <Nav className="d-flex fs-5 gap-3">
            <Nav.Link href="#home">Overview</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
