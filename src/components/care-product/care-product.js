"use client";
import React from "react";
import styles from "./careproduct.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import careIcon1 from "../../images/care-icon1.png";
import careIcon2 from "../../images/care-icon2.png";
import careIcon3 from "../../images/care-icon3.png";
import careIcon4 from "../../images/care-icon4.png";

const CareProduct = () => {
  return (
    <>
      <div className={`${styles.care_product_sec_div} common-padding`}>
        <Container>
          <h2 className="section-heading text-center">
            Just like you we care about
          </h2>
          <Row className="rowgap_30">
            <Col xs={6} sm={6} md={3}>
              <div className={`${styles.img_div}`}>
                <Image src={careIcon1} alt="icon" width={60} height={60} />
                <p className={`${styles.heading_text}`}>
                  Cruelty Free Products
                </p>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className={`${styles.img_div}`}>
                <Image src={careIcon2} alt="icon" width={60} height={60} />
                <p className={`${styles.heading_text}`}>
                  Cruelty Free Products
                </p>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className={`${styles.img_div}`}>
                <Image src={careIcon3} alt="icon" width={60} height={60} />
                <p className={`${styles.heading_text}`}>
                  Cruelty Free Products
                </p>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className={`${styles.img_div}`}>
                <Image src={careIcon4} alt="icon" width={60} height={60} />
                <p className={`${styles.heading_text}`}>
                  Cruelty Free Products
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CareProduct;
