import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../index.css';  
import { RxDownload } from "react-icons/rx";
import heroImageA from "../assets/NFT Sample A.svg";
import heroImageB from "../assets/NFT Sample b.svg";
import heroImageC from "../assets/NFT Sample c.svg";
import heroImageD from "../assets/NFT Sample d.svg";
import heroImageE from "../assets/NFT Sample e.svg";
import heroImageF from "../assets/NFT Sample f.svg";
import heroImageG from "../assets/NFT Sample g.svg";



const Hero = () => {
  const containerStyle = {
    display: "flex",
    whiteSpace: "nowrap",
    width: "200%",
  };

  const imageStyle = {
    display: "inline-block",
    width: "50%",
    height: "auto",
    marginRight: "10px",
  };

  const keyframesStyle = `
    @keyframes scroll {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `;

  const animationStyle = {
    animation: "scroll 40s linear infinite",
    display: "flex",
  };

  return (
    <div className="hero-section my-4 py-4">
      <Container>
        <div className="text-center mb-4">
          <h1 className="display-1 fw-semibold mb-0">Welcome to</h1>
          <h1 className="display-1 fw-semibold  p-3 orange-text mb-0">Ileri Residentials </h1>
          <p className="lead fs-4 fw-normal w-50 mx-auto ">
            Relax, Recharge and Reconnect yourself with nature at horizon mega
            city
          </p>

          <Button
            variant="primary"
            size="lg"
            className="mb-4"
            style={{
              borderRadius: "28.27px",
              backgroundColor: "#3D3D3D",
              borderColor: "#3D3D3D",
            }}
          >
            Get Brochure
            <RxDownload className="ms-2" />
          </Button>
        </div>

        <Container>
          <style>{keyframesStyle}</style>
          <Row>
            <Col md={6} className="px-0">
              <div style={containerStyle}>
                <div style={animationStyle}>
                  <img src={heroImageA} alt="Hero" style={imageStyle} />
                  <img src={heroImageB} alt="Hero" style={imageStyle} />
                  <img src={heroImageC} alt="Hero" style={imageStyle} />
                  <img src={heroImageD} alt="Hero" style={imageStyle} />
                  <img src={heroImageE} alt="Hero" style={imageStyle} />
                  <img src={heroImageF} alt="Hero" style={imageStyle} />
                  <img src={heroImageG} alt="Hero" style={imageStyle} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Hero;
