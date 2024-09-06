import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/iTech Logo svg 2.svg'; 



const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4 pt-5">
      <Container>
        <div className="mb-4">
          <Col  className="text-center text-md-left mb-3 mb-md-3">
            <img src={logo} alt="Logo" width="150" height="50" />
          </Col>

          <Col className="text-center text-md-right py-3">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center  mb-4 gap-4">
              <li>
                <a href="#home" className="text-dark text-decoration-none">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#features" className="text-dark text-decoration-none">
                  Schedule Inspection
                </a>
              </li>
              <li>
                <a href="#careers" className="text-dark text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#help" className="text-dark text-decoration-none">
                  Help
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-dark text-decoration-none">
                  Privacy
                </a>
              </li>
            </ul>
          </Col>
        </div>
        <hr className="bg-dark" />
        <Row className="text-center">
          <Col xs={12} className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Itech Homes and Properties. All
              rights reserved.
            </p>
            <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0">
              <li>
                <a href="#terms" className="text-dark text-decoration-none">
                  Terms
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-dark text-decoration-none">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-dark text-decoration-none">
                  Cookies
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

