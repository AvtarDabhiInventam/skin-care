import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
// import "./footer.css";
// import MapContainer from "./MapContainer";
import Image from "next/image";

function Footer() {
  return (
    <footer
      className="site-footer"
      id="contact"
      style={{ backgroundColor: "#fff" }}
    >
      <Container>
        <Row className="mt-5">
          <Col
            sm={6}
            md={4}
            data-aos="fade-right"
            className="mx-auto  d-flex justify-content-start  flex-column flex-wrap"
          >
            <Image src={logo} height={110} />
            {/* <h4 className="mt-3 text-center">
              University of <br /> York
            </h4> */}
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum.
            </p>
          </Col>
          <Col
            sm={6}
            md={4}
            data-aos="fade-left"
            className="d-flex mt-3 justify-content-start  flex-column flex-wrap"
          >
            <h3 className="mb-2 text-capitalize text-start">Free Yourself</h3>
            <div
              className="justify-content-start align-items-center flex-column"
              
            >
              <p class="d-flex flex-wrap">
                <span class="mr-4 footer-icon">
                  <i class="fas fa-map"></i>
                </span>
                <span>803, Valentina Business Hub, </span>
              </p>
              <p class="d-flex flex-wrap">
                <span class="mr-4 footer-icon">
                  <i class="fas fa-phone"></i>
                </span>
                <span>094297 96373 </span>
              </p>
              <p class="d-flex flex-wrap">
                <span class="mr-4 footer-icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <span>enolaholmes@email.com</span>
              </p>
            </div>
          </Col>
          <Col
            sm={6}
            md={4}
            data-aos="fade-left"
            className="mx-auto mt-3 d-flex justify-content-start  flex-column flex-wrap"
          >
            <h3 className="mb-2">Company</h3>

     
          </Col>
        </Row>
        <hr />
      </Container>
      <Container>
        <Row>
          <Col md={8} sm={6} xs={12}>
            <p class="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <a href="#copyright"> Inventam Company</a>.
            </p>
          </Col>
          <Col md={4} sm={6} xs={12}>
            {/* <ul class="social-icons">
              <li>
                <a class="facebook" href="#fb">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#twitter">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#dribble">
                  <i class="fab fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="#linkedin">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
