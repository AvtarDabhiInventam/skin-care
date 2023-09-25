"use client";
import React from "react";
import styles from "./about.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import SkinMoistureImg from "../../images/skin-moisture.png";

const SkinAbout = () => {
  return (
    <>
      <div className={`${styles.skin_about_sec_div} common-padding`}>
        <Container fluid="true">
          <Row className="zindex_div">
            <Col xs={12} sm={12} md={6} className="d-flex align-items-center">
              <div className={`${styles.contain_sec}`}>
                <h2 className="common_sec_heading">
                  <span>Skin</span> Moisture
                </h2>
                <p className="common-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="common-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
                <div className={`${styles.skin_about_img}`}>
                    <Image src={SkinMoistureImg} alt="Banner" width={1920} height={1000} />
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SkinAbout;
