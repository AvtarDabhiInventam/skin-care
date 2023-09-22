import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../../styles/home.module.scss";
import skin1 from "../../images/skin-1.jpg";
import Image from "next/image";

const SkinType = () => {
  return (
    <section>
      <Row>
        <Col xs={12} lg={6} md={6} className="pe-0">
          <div>
            <Image src={skin1} fluid className={`${styles.skinImage}`} />
          </div>
        </Col>
        <Col xs={12} lg={6} md={6} className="ps-0">
          <div className="p-5 d-flex flex-column align-items-start justify-content-center h-100">
            <h1 className="text-capitalize font-roboto mb-0">
              Acne <span className="fw-lighter">Skin</span>
            </h1>
            <p className="my-4 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button>learn more</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6} md={6} className="pe-0">
          <div className="p-5 d-flex flex-column align-items-start justify-content-center h-100">
            <h1 className="text-capitalize font-roboto mb-0">
              Dry <span className="fw-lighter">Skin</span>
            </h1>
            <p className="my-4 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <Button>learn more</Button>
          </div>
        </Col>
        <Col xs={12} lg={6} md={6} className="ps-0">
          <div>
            <Image src={skin1} fluid className={`${styles.skinImage}`} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6} md={6} className="pe-0">
          <div>
            <Image src={skin1} fluid className={`${styles.skinImage}`} />
          </div>
        </Col>
        <Col xs={12} lg={6} md={6} className="ps-0">
          <div className="p-5 d-flex flex-column align-items-start justify-content-center h-100">
            <h1 className="text-capitalize font-roboto mb-0">
              Psoriasis <span className="fw-lighter">Skin</span>
            </h1>
            <p className="my-4 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button>learn more</Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SkinType;
