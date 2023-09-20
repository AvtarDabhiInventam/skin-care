import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./about.css";
import { Link } from "react-router-dom";
import skin1 from "../../src/images/skin-1.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      className="about py-5"
      id="about"
      style={{ backgroundColor: "#fff" }}
    >
      <Container>
        <Row>
          <Col xs={10} lg={6} md={6}>
            <h1 className="text-capitalize">
              about the <br />
              <strong className="banner-title">University</strong>
            </h1>
            <p
              className="my-4 text-muted w-75 about-text"
              data-aos="fade-right"
            >
              Sheikh-Ul-Alam Memorial Degree College, Budgam is the first
              institution of its kind in the district Budgam. The college while
              upholding the guiding mantra of famous Rishi Sheikh-Ul-Alam (RA)
              endeavours to bring about social, moral and spiritual
              transformation of the social set up by bringing it closer to the
              currents of prevalent knowledge.
            </p>
            <a
              href="/about"
              className="btn btn-outline-primary text-uppercase learn-more"
              data-aos="fade-right"
            >
              <Link to="/about">learn more</Link>
              <span>
                <i
                  style={{ marginLeft: 10 }}
                  className="fas fa-arrow-right"
                ></i>
              </span>
            </a>
          </Col>
          <Col xs={10} lg={6} md={6} data-aos="fade-in">
            <div className="about-img_container">
              <Image src={skin1} fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
