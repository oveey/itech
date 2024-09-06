import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageA from "../assets/fencing.svg";
import ImageB from "../assets/security.svg";
import ImageC from "../assets/Gym.svg";
import ImageD from "../assets/Stable.svg";
import ImageE from "../assets/Stable.svg";
import ImageF from "../assets/Stable.svg";
import AmenityItem from "./AmenityItem";

const Main = () => {
  return (
    <section className="main-section">
      <Container>
        {/* Header Section */}
        <Row className="align-items-center mb-5 pt-5">
          <Col md={12} className="text-center ">
            <h1 className="display-5 fw-semibold w-75 mx-auto ">
              Discover Our Amenities, Elevating Your Living Experience.
            </h1>
          </Col>
        </Row>

        {/* Video Section */}
        <Row className="justify-content-center mb-4 pt-5">
          <Col md={12} className="text-center">
            <div
              className="video-container"
              style={{ maxWidth: "1056px", margin: "0 auto" }}
            >
              <video width="100%" height="auto" controls>
                <source src="path_to_your_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>

        <Row className=" mb-4 pt-5" >
          <Col md={6} className="d-flex flex-column ">
            <div className="/">
              <h3 className="display-6 mb-4 fw-normal">Description</h3>
              <p className="fs-4 mb-5">
                Ileri Residential is a visionary residential estate designed to
                redefine the standards of estate construction. Nestled in a
                serene and secure gated community, it offers an array of
                cutting-edge amenities for a modern lifestyle. With plot sizes
                ranging from 300SQM to 500SQM, you have the flexibility to
                choose the perfect space for your dream home.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="display-5 mb-4 fw-semibold ">PLOT SIZE</h3>
              <Row className="justify-content-center">
                <Col xs={5} md={4} className="p-3 text-center border-end">
                  <h3>300</h3>
                  <p>SQM</p>
                </Col>
              
                <Col xs={5} md={4} className="p-3 text-center">
                  <h3>500</h3>
                  <p>SQM</p>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Amenities Section */}

          <Col md={6} className="d-flex flex-column align-items-center mb-4">
            <div className="/">
              <h3 className="display-6 mb-4 fw-normal">Amenities</h3>
              <Container>
                <Row className="justify-content-center">
                  <Col md={4} className="d-flex flex-column align-items-center">
                    <AmenityItem
                      imageSrc={ImageA}
                      altText="Perimeter fencing"
                      description="Perimeter fencing"
                    />
                    <AmenityItem
                      imageSrc={ImageC}
                      altText="Gym house"
                      description="Gym house"
                    />
                  </Col>

                  <Col md={4} className="d-flex flex-column align-items-center">
                    <AmenityItem
                      imageSrc={ImageB}
                      altText="Estate Security"
                      description="Estate Security"
                    />
                    <AmenityItem
                      imageSrc={ImageE}
                      altText="Drainage System"
                      description="Drainage System"
                    />
                  </Col>

                  <Col md={4} className="d-flex flex-column align-items-center">
                    <AmenityItem
                      imageSrc={ImageD}
                      altText="Stable Electricity"
                      description="Stable Electricity"
                    />
                    <AmenityItem
                      imageSrc={ImageF}
                      altText="Estate Security"
                      description="Estate Security"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
