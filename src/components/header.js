import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/ logo.svg";
import { FaArrowLeft } from "react-icons/fa"; 

const Header = () => {
  return (
    <Navbar expand="lg" className="/">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <FaArrowLeft className="me-2" />{" "}
          Back to iTech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center justify-content-center">
            <Navbar.Brand className="d-flex align-items-center mx-auto">
              <img
                src={logo}
                alt="Logo"
                width="150"
                height="50"
                className="d-inline-block align-middle"
              />
            </Navbar.Brand>
          </Nav>

          <Nav className="d-flex">
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
