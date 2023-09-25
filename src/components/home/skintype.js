import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../../styles/home.module.scss";
import skin1 from "../../images/skin-1.jpg";
import skin2 from "../../images/skin-2.jpg";
import skin3 from "../../images/skin-3.jpg";
import Image from "next/image";

const SkinType = () => {
  return (
    <section>
      <Container>
      <h2 className="section-heading">Do you struggle with</h2>
      </Container>
      <Row>
        <Col xs={12} lg={6} md={6} className="pe-0">
          <div>
            <Image src={skin1} fluid="true" className={`${styles.skinImage}`} alt="skin"/>
          </div>
        </Col>
        <Col xs={12} lg={6} md={6} className="ps-0">
          <div className="p-5 d-flex flex-column align-items-start justify-content-center h-100 left-mob-space-div">
            <h3 className="text-capitalize font-roboto mb-0 common_sec_heading">
              <span>Acne</span> Skin
            </h3>
            <p className="my-4 text-muted common-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="common-btn">learn more</Button>
          </div>
        </Col>
      </Row>
      <Row className="column-reverse">
        <Col xs={12} lg={6} md={6} className="pe-0">
          <div className="p-5 d-flex flex-column align-items-start justify-content-center h-100 right-mob-space-div">
            <h3 className="text-capitalize font-roboto mb-0 common_sec_heading">
              <span>Dry</span> Skin
            </h3>
            <p className="my-4 text-muted common-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <Button className="common-btn">learn more</Button>
          </div>
        </Col>
        <Col xs={12} lg={6} md={6} className="ps-0">
          <div>
            <Image src={skin2} fluid="true" className={`${styles.skinImage}`} alt="skin"/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6} md={6} className="pe-0">
          <div>
            <Image src={skin3} fluid="true" className={`${styles.skinImage}`} alt="skin"/>
          </div>
        </Col>
        <Col xs={12} lg={6} md={6} className="ps-0">
          <div className="p-5 d-flex flex-column align-items-start justify-content-center h-100 left-mob-space-div">
            <h1 className="text-capitalize font-roboto mb-0 common_sec_heading">
              <span>Psoriasis</span> Skin
            </h1>
            <p className="my-4 text-muted common-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="common-btn">learn more</Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SkinType;
